const checkSum = arr => {
    let checkSum = [];
    if (!Array.isArray(arr)) {
        return null;
    }
    let res = arr.reduce((accumulator, currentValue) => accumulator + currentValue);
    if (sum > 100) {
        return true;

    } else { return false }
}
}