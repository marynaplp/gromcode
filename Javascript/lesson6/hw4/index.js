function increaseEvenEl(arr, delta) {
    if (!Array.isArray(arr)) return null;
    let result = [];
    arr.forEach(elem => {
        if (elem % 2 === 0) {
            result.push(elem + delta);
        }
    });
    return result;
}