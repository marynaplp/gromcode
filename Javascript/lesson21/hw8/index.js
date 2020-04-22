function finishList() {
    const oneItem = document.createElement('li');
    oneItem.textContent = '1';
    document.querySelector('ul').prepend(oneItem);

    const fourItem = document.createElement('li');
    fourItem.textContent = '4';
    document.querySelector('.special').before(fourItem);


    const sixItem = document.createElement('li');
    sixItem.textContent = '6';
    document.querySelector('.special').after(sixItem);



    const eightItem = document.createElement('li');
    eightItem.textContent = '8';
    document.querySelector('ul').append(eightItem);


}
export { finishList }