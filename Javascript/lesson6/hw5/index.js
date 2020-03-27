const arr = [2, 5, 6, 7, 8, 9];

function reverseArray(arr) {

    let res = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        res.push(arr[i]);


        if (!Array.isArray(arr)) {
            return null;
        }
    }
    return res;
}


const getReverseArray = reverseArray(mainArray);