export const addImage = (imgSrc, callback) => {
    const imgElem = document.createElement('img');
    imgElem.setAttribute('alt', 'My Photo');
    imgElem.src = imgSrc;
    console.log(imgSrc);

    const containerElem = document.querySelector('.page');
    containerElem.append(imgElem);

    const onImageLoaded = () => {
        const {
            width,
            height
        } = imgElem;
        console.log(imgElem);

        callback(null, {
            width,
            height
        });
    };

    imgElem.addEventListener('load', onImageLoaded);

    imgElem.addEventListener('error', () => callback('Image load failed'))
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
    sizeElem.textContent = `${width}: x ${height}`;
};

addImage(imgSrc, onImageLoaded);


/// add sizes into the span