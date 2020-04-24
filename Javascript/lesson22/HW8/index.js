const checkBox = document.querySelector('.task-status');
const checkbox = (event) => {
    console.log(event.target.checked)
};

checkBox.addEventListener('change', () => {
    checkbox ? console.log(true) : console.log(false);
});