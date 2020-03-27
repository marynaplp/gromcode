const checkSum = arr => {
    if (!Array.isArray(arr)) {
        return null;
        let res = arr.reduce((accumulator, currentValue) => accumulator + currentValue);
        if (res > 100) {
            return true;

        } else { return false; }
    }
}