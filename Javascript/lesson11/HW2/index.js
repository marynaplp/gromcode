const countOccurences = (str, arg) => {
    if (arg === '') {
        return null;
    }
    const countOccurences = (arg.split(str).length - 1);
    return countOccurences;


}