const express = require('express')
const bodyParser = require('body-parser')
const { engine } = require('express-handlebars')
const randomPassword = require('./public/javascript/randomPassword')
const app = express()
const port = 3000

app.engine('.hbs', engine({ extname: '.hbs' }));
app.set('view engine', '.hbs');
app.set('views', './views');

app.use(express.static('public'))

// 設定 body-parser 中間件
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.render('index')
})

app.post('/generator_password', (req, res) => {
  const data = req.body
  const password = randomPassword.getRandomPassword(data)
  res.render('index', { password, data: data })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})