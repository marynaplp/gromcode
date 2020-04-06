const getMinSquaredNumber = arr => {
    if (!Array.isArray(arr)) {
        return null;
    }
    let i = arr.map(el => el * el)
    return Math.abs(Math.min(...a));

};