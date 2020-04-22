function getItemsList() {
    const itemsList = document.querySelectorAll('.technoly')
    console.dir(elementsList);
    return itemsList;
}

function getItemsArray() {
    const elementsArray = Array.from(document.querySeletorAll('.tool'))
    console.dir(elementsArray)
    return elementsArray;
}

export { getItemsList, getItemsArray }