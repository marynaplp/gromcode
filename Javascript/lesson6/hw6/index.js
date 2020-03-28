function cloneArr(arr) {
    if (!Array.isArray(arr)) {
        return null;
    }
    let NewArr = [];
    for (let i = 0; i < arr.length; i++) {
        NewArr.push(arr[i]);
    }
    return NewArr;
}