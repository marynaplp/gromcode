const reverseString = str => {
    if (typeof str === !String) {
        return null;
    }
    return (str.split('').reverse().join(''));


}