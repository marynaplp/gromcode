export const delay = time =>
    new Promise((resolve) => {
        setTimeout(() => {
            resolve(delay);
        }, time)
    })