export const delay = time => {
    new Promise((resolve) => {
        setTimeout(() => {
            console.log(delay);
            resolve(delay);
        }, 3000)
    });
}
delay(3000)
    .they(() => console.log("Done"));