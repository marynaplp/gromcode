function sum(arr) {
    if (!Array.isArray(arr)) {
        return null;
    }
    let result = arr.reduce(function(sum, num) {
        return sum + num;
    });
    return result;
}