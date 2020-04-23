const click = document.querySelector('.single-use-btn');

const firstClick = () => {
    console.log('clicked')
    click.removeEventListener('click', firstClick)
}

click.addEventListener('click', firstClick);