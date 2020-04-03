const countOccurrences = (str, arg) => {
    if (arg === '') {
        return null;
    }
    const countOccurrences = (arg.split(str).length - 1);
    return countOccurrences;


}