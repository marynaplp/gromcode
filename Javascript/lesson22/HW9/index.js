const buttons = document.querySelectorAll('.pagination__page');

const handleClick = (event) =>
    console.log(event.target.dataset);

buttons.forEach(button => {
    button.addEventListener('click', handleClick)

});