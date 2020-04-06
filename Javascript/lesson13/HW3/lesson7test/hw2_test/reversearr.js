const reverseArray = arr => {

    let newArr = [];
    if (Array.isArray(arr)) {
        newArr = arr.slice().reverse();
    } else {
        return null;
    }

    return newArr;
}