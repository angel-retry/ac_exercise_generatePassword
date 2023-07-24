const form = document.querySelector('#form')
const submitButton = document.querySelector('#submitButton')

const passwordLength = document.querySelector('#passwordLength')

form.addEventListener('submit', function onFormSubmitted(event) {
  //判斷表單是否有寫入資料，使用checkValidity()檢查在html 增加required屬性的element有沒有填寫資料
  if (!form.checkValidity()) {
    //否的話，停止傳送資料及更新頁面
    event.preventDefault()
    event.stopPropagation()

  }
})


//增加假如沒填入完整資料畫面
submitButton.addEventListener('click', function onButtonSubmitted() {
  //增加.was-validated樣式
  form.classList.add('was-validated')
})