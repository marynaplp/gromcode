export const addImage = (imgSrc, callback) => {
    const imgElem = document.createElement('img'); // create an elemt of the picture
    imgElem.setAttribute('alt', 'My photo'); // set the attribute
    imgElem.src = imgSrc;
    console.log(imgSrc);

    const containerElem = document.querySelector('.page');
    containerElem.append(imgElem);

    const onImageLoaded = () => {
        const { width, height } = imgElem;
        callback(null, ({ width, height }))
    };
    imgElem.addEventListener('load', onImageLoaded)

    imgElem.addEventListener('error', () => callback('Imagr load failed'))



};

const imgSrc = 'https://gromcode.s3.eu-central-1.amazonaws.com/front-end/html-css/lesson21/task2/nature.jpeg';

const onImageLoaded = (error, data) => {
    if (error) {
        console.log(error);
        return;
    }
    const {
        width,
        height
    } = data;
    const sizeElem = document.querySelector('.image-size');
    sizeElem.textContent = `${width} x ${height}`;
};

addImage(imgSrc, onImageLoaded);
/// add sizes into the span