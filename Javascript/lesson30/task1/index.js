const addImagee = imgSrc => {
    const p = new Promise((resolveCb, rejectCb) => {
        const imgElem = document.createElement('img');
        imgElem.setAttribute('alt', 'My Photo');
        imgElem.src = imgSrc;
        const containerElem = document.querySelector('.page');
        containerElem.append(imgElem);

        function onImageLoaded() {
            const {
                width,
                height
            } = imgElem;
            resolveCb({
                width,
                height
            });
        };

        imgElem.addEventListener('load', onImageLoaded);
        imgElem.addEventListener('error', () => rejectCb(new Error('Image load failed')));
    })
    return p;
};
const result = addImage(imgSrc);
console.log(result);

//function onImageLoaded(error, data) {
// if (error) {
//     console.log(error);
//     return;
// }
// const {
//  width,
// height
//} = data;
//const sizeElem = document.querySelector('.image-size');
//  sizeElem.textContent = `${width} x ${height}`;
//};

export {
    addImage
};