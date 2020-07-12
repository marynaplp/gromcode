//1. get elements from DOM
//2. create handler function that will be trigerred after from submit
//3. gather all form info with FormData object
//4. make post request to the server with form info and handle error
//5. create handler function B that will be trigerred after inputs change
//6. use reportValidity to validate form

const baseUrl = 'https://5ecedb5261c8480016701a8f.mockapi.io/api/v1/loginForm'


const inp = document.querySelectorAll('input');
const errorText = document.querySelector('.error-text');
const loginForm = document.querySelector('.login-form');
const submitBtn = document.querySelector('.submit-button');


const reportValidation = () => {
    if (loginForm.reportValidity())
        submitBtn.disabled = false;
    else submitBtn.disabled = true;
};


loginForm.addEventListener('input', reportValidation);


const validationUser = e => {
    e.preventDefault();


    const userValue = [...new FormData(loginForm)]
        .reduce((email, [name, password]) => ({...email, [name]: password }), {});


    console.log(userValue);

    fetch(baseUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8',
            },
            body: JSON.stringify(userValue)
        })
        .then(response => response.json())
        .then(data => {
            inp.forEach(elem => elem.value = '');
            alert(JSON.stringify(data));
        })
        .catch(() => {
            errorText.textContent = 'Failed to create user';
        });


}


submitBtn.addEventListener('click', validationUser);