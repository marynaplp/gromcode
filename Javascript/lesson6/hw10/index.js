function getSubArray(arr, num) {
    let result = [];
    for (let i = 0; i < num; i++) {
        result.push(arr(i));
    }
    return result;
};