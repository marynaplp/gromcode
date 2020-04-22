function getItemsList() {
    const elementsList = document.querySelectorAll('.technoly')
    console.dir(elementsList);
    return elementsList
}

function getItemsArray() {
    const elementsArray = Array.from(document.querySeletorAll('.tool'))
    console.dir(elementsArray)
    return elementsArray;
}

export { getItemsList, getItemsArray }