function setButton(buttonText) {
    const newButton = document.querySelector('body');
    return newButton.innerHTML = `<button>${buttonText}</button>`;
}
export { setButton }