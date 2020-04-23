function manageClasses() {
    const oneItem = document.querySelector('.one');
    oneItem.classList.add('selected');

    const twoItem = document.querySelector('.two');
    twoItem.classList.remove('selected');

    const threeItem = document.querySelector('.three');
    threeItem.classList.toggle('three_done');

    const fourItem = document.querySelector('.four');
    if (fourItem.getElementByTagName("some-class")) {
        fourItem.classList.add('another-class');
    }
}

export { manageClasses };