function finishList() {
    const oneItem = document.createElement('li');
    oneItem.textContent = '1';
    const listElem = document.querySelector('ul');
    listElem.prepend(oneItem);

    const fourItem = document.createElement('li');
    fourItem.textContent = '4';
    const listElem = document.querySelector('.special');
    listElem.before(fourItem);


    const sixItem = document.createElement('li');
    sixItem.textContent = '6';
    const listElem = document.querySelector('.special');
    listElem.after(sixItem);



    const eightItem = document.createElement('li');
    eightItem.textContent = '8';
    const listElem = document.querySelector('ul');
    listElem.append(eightItem);


}
export { finishList }