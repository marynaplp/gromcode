function checkSum(arr) {
    let checkSum = [];
    if (!Array.isArray(arr)) {
        return null;
    }
    if (Array.isArray(arr)) {
        let sum = 0;
        for (let i = 0; i < arr.length; i++) {
            sum += array[i];
        }
        if (sum > 100) {
            return true;

        } else { return false; }
    }
}