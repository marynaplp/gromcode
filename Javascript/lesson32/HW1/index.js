/*
*ф - ция makePromise должна вернуть промис со значением переданным в ф - цию *
    /

/* ...code here */
export const makePromise = (value) => new Promise(resolve => {
    setTimeout(() => {
        console.log(value);
        resolve(value);
    }, 0);
});
/*
 * пример использования
 */
makePromise(17)
    .then(number => {
        console.log(number); // 17
    });