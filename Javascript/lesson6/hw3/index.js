function checkSum(arr) {
    if (!Array.isArray(arr)) {
        return null;
    }
    if (Array.isArray(arr)) {
        let sum = 0;
        for (let i in arr) {
            sum += array[i];
        }
        if (sum > 100) {
            return true;
        } else { return false; }
    }
}