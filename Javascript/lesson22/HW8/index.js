const checkBox = document.querySelector('.task-status');

const checkbox = (event) => {
    console.log(event.target.value)
};

checkBox.addEventListener('change', () => {
    checkbox.checked ? console.log(true) : console.log(false);
});