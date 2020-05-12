const addImage = imgSrc => {
    const p = new Promise((resolve, reject) => {
        const imgElem = document.createElement('img');
        imgElem.setAttribute('alt', 'My Photo');
        imgElem.src = imgSrc;
        const containerElem = document.querySelector('.page');
        containerElem.append(imgElem);

        const onImageLoaded = () => {
            const {
                width,
                height
            } = imgElem;
            resolve({
                width,
                height
            });
        };

        imgElem.addEventListener('load', onImageLoaded);
        imgElem.addEventListener('error', () => reject('Image load failed'));
    })
    return p;
};
const result = addImage(imgSrc);
result.then(data => console.log(data));

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