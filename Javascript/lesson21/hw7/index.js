function createButton(buttonText) {
    const newButton = document.createElement('button');
    newButton.textContent = buttonText;
    const buttonElem = document.querySelector('body');
    buttonElem.append(newButton);

}
export { createButton };