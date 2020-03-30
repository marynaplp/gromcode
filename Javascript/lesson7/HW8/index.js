function arrAverage(arr) {
    if (!Array.isArray(arr)) {
        return null;
    }
    let sum = arr.reduce(function(accumulator, currentValue) {
        return (accumulator + currentValue);

    });
    return sum / arr.length;

}