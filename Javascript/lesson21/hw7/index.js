function createButton(buttonText) {
    const newButton = document.createElement('button');
    newButton.textContent = '${text}';
    const buttonElem = document.querySelector('button');
    buttonElem.append(newButton);

}
export { createButton };