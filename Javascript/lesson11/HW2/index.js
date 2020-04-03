const countOccurances = (str, arg) => {
    if (arg === '') {
        return null;
    }
    const countOccurances = (arg.split(str).length - 1);
    return countOccurances;


}