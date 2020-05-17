/*
*ф - ция makePromise должна вернуть промис со значением переданным в ф - цию *
    /

/* ...code here */
const makePromise = (value, delay) => new Promise(resolve => {
    setTimeout(() => {
        console.log(value);
        resolve(value);
    }, delay);
});
/*
 * пример использования
 */
makePromise(17)
    .then(number => {
        console.log(number); // 17
    });