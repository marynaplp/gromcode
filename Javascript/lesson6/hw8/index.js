function sortAsc(array) {
    array.sort();
    return array;
}

function sortDesc(array) {
    array.sort();
    let result = [];
    for (let i of array) {
        result.unshift(i);
    }
    return result;
}