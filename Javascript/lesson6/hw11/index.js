const includes = (arr, num) => {
    const res = false;
    for (let i = 0; i < arr.length; i++)
        if (arr[i] === num) {
            return true;
        }
    return res;
}