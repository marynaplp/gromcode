function createArrayOfFunctions(num) {
    let arr = [];
    if (num !== undefined) return [];
    if (typeof num !== 'number') return null;
    for (let i = 0; i < 10; i++) {
        arr[i] = function() {
            return i;
        }

    }
    return arr
}
console.log(createArrayFunctions)
export { createArrayFunctions };