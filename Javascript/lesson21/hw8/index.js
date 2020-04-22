function finishList() {
    const newItem = document.createElement('li');
    newItem.textContent = '1';
    const listElem = document.querySelector('ul');
    listElem.prepend(newItem);

    const newItem = document.createElement('li');
    newItem.textContent = '4';
    const listElem = document.querySelector('special');
    listElem.before(newItem);


    const newItem = document.createElement('li');
    newItem.textContent = '6';
    const listElem = document.querySelector('special');
    listElem.after(newItem);



    const newItem = document.createElement('li');
    newItem.textContent = '8';
    const listElem = document.querySelector('ul');
    listElem.append(newItem);


}
export { finishList }