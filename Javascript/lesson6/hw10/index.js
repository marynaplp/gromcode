function getSubArray([arr], num) {
    let newArray = [];
    for (let i = 0; i < num; i++) {
        newArray.push(arr(i));
    }
    return newArray;
};