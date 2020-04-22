function getTitleElement() {
    const titleElement = document.querySelector('.title')
    console.dir(titleElement)
    return titleElement;
}

function getInputElement() {
    const inputElement = document.querySelector('input', 'text')
    console.dir(inputElement)
    return inputElement;
}
export { getTitleElement, getInputElement }