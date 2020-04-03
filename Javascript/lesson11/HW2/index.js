const countOccurrences = (str, arg) => {
    if (arg === '') {
        return null;
    }
    const countOccurrences = (str.split(arg).length - 1);
    return countOccurrences;


}