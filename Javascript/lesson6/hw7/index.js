function checker(arr) {
    if (!Array.isArray(arr)) {
        return null;
    }
    let sumArr = 0;
    for (let i = 0; i < arr.length; i++) {
        sumArr += arr[i];
        console.log(sumArr(i));
    }
    if (sumArr > 1000) {
        return true;
    } else {
        return false;
    }
}