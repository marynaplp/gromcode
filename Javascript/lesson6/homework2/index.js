function squareArray(arr) {
    let squareArr = [];
    if (!Array.isArray(arr)) {
        return null;
    }
    for (let i = 0; i < arr.length; i++) {
        squaredArr.push(arr[i] * arr[i])
    }
    return squaredArr;

}