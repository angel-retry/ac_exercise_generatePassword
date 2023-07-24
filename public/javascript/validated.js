const form = document.querySelector('#form')
const submitButton = document.querySelector('#submitButton')

const passwordLength = document.querySelector('#passwordLength')

form.addEventListener('submit', function onFormSubmitted(event) {
  if (!form.checkValidity()) {
    event.preventDefault()
    event.stopPropagation()

  }
})

submitButton.addEventListener('click', function onButtonSubmitted() {
  form.classList.add('was-validated')
})