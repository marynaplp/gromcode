const reversed = arr => {
    let newArr = [];
    if (Array.isArray(arr)) {
        newArr = arr.map(num => num * num)
    } else {
        return null;
    }
    return newArr;
}