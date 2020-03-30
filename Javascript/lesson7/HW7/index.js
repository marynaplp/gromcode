const filterNames = (arr, text) => {
    return arr.filter(el => el(text).length > 5);


};