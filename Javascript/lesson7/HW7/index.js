function filterNames(arr, text) {
    return arr.filter(name => name(text).length > 5);

};