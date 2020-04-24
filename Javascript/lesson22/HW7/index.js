const inPutValue = document.querySelector('.text-input');

const inPut = (event) => {
    console.log(event.target.value)
};
inPutValue.addEventListener('change', inPut)