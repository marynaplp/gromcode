function filterNames(arr, text) {
    return arr.filter(el => el(text) && el.length > 5);


};