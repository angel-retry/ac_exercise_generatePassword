function getRandomPassword(data) {
  // 宣告生成密碼的基底
  const lowercase_characters = "abcdefghijklmnopqrstuvwxyz";
  const uppercase_characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numbers = "0123456789";
  const symbols = "!#$%&()*+,-./:;<=>?@[]^_{|}~";

  //宣告接收使用者決定隨機數的基底
  let total_characters = ""

  //判斷使用者的決定隨機數種類
  if (data.LowercaseCharacters === 'on') {
    total_characters += lowercase_characters
  }

  if (data.UppercaseCharacters === 'on') {
    total_characters += uppercase_characters
  }

  if (data.numbers === 'on') {
    total_characters += numbers
  }

  if (data.symbols === 'on') {
    total_characters += symbols
  }

  if (!total_characters.length) {
    return "There is no valid character in your selection."
  }

  //淘汰使用者不需要的字元
  if (data.excludeCharacters) {
    //把字串變為陣列
    total_characters = Array.from(total_characters)
    total_characters = total_characters.filter(character => !data.excludeCharacters.includes(character))
  }

  //產出隨機密碼
  function getRandomNumber(data) {
    const randomIndex = Math.floor(Math.random() * data.length)
    const randomNumber = data[randomIndex]
    return randomNumber
  }

  //產生完整隨機密碼
  let generatePassword = ""
  for (let i = 0; i < data.passwordLength; i++) {
    generatePassword += getRandomNumber(total_characters)

  }

  // 回傳最終密碼
  return generatePassword
}

//引用此function getRandomPassword
module.exports = {
  getRandomPassword: getRandomPassword
}