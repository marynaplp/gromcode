const inPutValue = document.querySelector('.text-input');

const inPut = (event) => {
    console.log(event.target.textContent)
};
inPutValue.addEventListener('change', inPut)