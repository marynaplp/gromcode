function removeDuplicates(array) {
    if (!Array.isArray(arr)) {
        return null;
    }
    let a = [];
    for (let i = 0; i < array.length; i++) {
        a.push(array[i])
        for (let k = i + 1; k < array.length; k++) {

            if (array[i] === array[k]) {

                a.pop(array[k]);
            }
        }
    }
    return a;
}