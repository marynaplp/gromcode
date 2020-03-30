const reverseArray = arr => {

    let reversedArr = [];
    if (Array.isArray(arr)) {
        reversedArray = arr.slice().reversed();
    } else {
        return null;
    }

    return reversedArr;
}