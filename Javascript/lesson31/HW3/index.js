export const delay = time => {
    new Promise((resolve) => {
        setTimeout(() => {
            console.log(delay);
            resolve(delay);
        }, time)
    });
}
delay(3000)
    .then(() => console.log("Done"));