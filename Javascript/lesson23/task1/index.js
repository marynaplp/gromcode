const emailInputElem = document.querySelector("#email");
const passwordInputElem = document.querySelector("#password");
const emailErrorElem = document.querySelector(".error-text_email");
const passwordErrorElem = document.querySelector(".error-text_password");
// аналіз поля; step4 
const isRequired = (value) => (value ? undefined : "Required");// если значение присутсвует то ничего не возвращается; если поля нет то возвращается ошибка  

const isEmail = (value) =>
    value.includes("@") ? undefined : "Should be an email"; //  второй валідатор что поле емейл

const validatorsByField = {.//step 4 когда будет менятся поле e-mail  нужно сгенеріровать ошибку на основе валидаторов
    email: [isRequired, isEmail],
    password: [isRequired],
};

const validate = (fieldName, value) => {// //step 4 когда будет менятся поле e-mail  нужно сгенеріровать ошибку на основе валидаторов
    const validators = validatorsByField[fieldName];
    return validators
        .map((validator) => validator(value)) // каждый валидатор запускается со значением onEmailChange, onPasswordChange
        .filter((errorText) => errorText)
        .join(", ");//  ввиде оодной строкі 
};

const onEmailChange = (event) => {//step 3 обработчик
    const errorText = validate("email", event.target.value//значение которое было получено в обработчике);//  target это дом елемент,а у дом елемент input есть свойтво   value 
    emailErrorElem.textContent = errorText;
};

const onPasswordChange = (event) => { //проверка для Password change
    const errorText = validate("password", event.target.value);
    passwordErrorElem.textContent = errorText;
};

emailInputElem.addEventListener("input", onEmailChange);//subscribe on event поле ввода когда пользователь будет взаимодействовать.// step2
passwordInputElem.addEventListener("input", onPasswordChange);

const formElem = document.querySelector(".login-form");

const onFormSubmit = (event) => {
    event.preventDefault();// отменить дефолт перезагружает страницу и делает определенный запрос
    const formData = [...new FormData(formElem)].reduce( // сконструет обьект с которым мы можем взаимодействовать;  получить все значения поля 
        (acc, [field, value]) => ({
            ...acc,
            [field]: value,
        }), {}  
    );
    alert(JSON.stringify(formData));
};


formElem.addEventListener('submit', onFormSubmit);
