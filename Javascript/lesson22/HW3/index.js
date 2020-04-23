const checkBox = document.querySelector('.task-status');

checkBox.addEventListener('change', () => {
    checkBox.checked ? console.log(true) : console.log(false);
});