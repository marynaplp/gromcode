const button = document.querySelectorAll('.btn');

function handleClick(event) {
    console.log(event.target.textContent);

    button.forEach(button => {
        button.addEventListener('click', handleClick)

    });

};