function filterNames(arr, text) {
    return arr.filter(name => name(text) && name.length > 5);


};