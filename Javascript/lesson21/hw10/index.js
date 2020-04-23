function manageClasses() {
    const firstItem = document.querySelector('.one');
    firstItem.classList.add('.selected');

    const secondItem = document.querySelector('.two');
    secondItem.classList.remove('.selected');

    const thirdItem = document.querySelector('.three');
    thirdItem.classList.toggle('three-done');

    const forthItem = document.querySelector('.four');
    if (forthItem.getElementByTagName(' some-class')) {
        forthItem.classListadd('another-class');
    }
}

export { manageClasses };