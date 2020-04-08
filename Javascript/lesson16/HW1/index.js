export const createArrayOfFunctions = (num) => {
    let arr = [];
    if (num !== undefined) return [];
    if (num !== 'number') return null;
    for (let i = 0; i < 10; i++) {
        arr[i] = function() {
            return i;
        }

    }
    return arr
}