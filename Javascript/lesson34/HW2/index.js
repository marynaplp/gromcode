//1. get elements from DOM
//2. create handler function that will be trigerred after from submit
//3. gather all form info with FormData object
//4. make post request to the server with form info and handle error
//5. create handler function B that will be trigerred after inputs change
//6. use reportValidity to validate form

const baseUrl = 'https://5ecedb5261c8480016701a8f.mockapi.io/v1/users'

const input = document.querySelectorAll('.input');
const submitButton = document.querySelector('.submit-button');
const formControl = document.querySelector('.form-control');
const errorText = document.querySelector('.error-text');
const loginForm = document.querySelector('.login-form')

function validedReport() {
    if (loginForm.reportValidity()) {
        submitForm.disabled = false;
        submitForm.disabled = true;

    }

}


loginForm.addListener("click", validedReport);