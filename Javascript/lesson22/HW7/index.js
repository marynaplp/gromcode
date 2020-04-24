const inPutValue = document.querySelector('.text-input');

const inPut = (event) => {
    console.log(event.target.checked)
};
inPutValue.addEventListener('change', inPut)