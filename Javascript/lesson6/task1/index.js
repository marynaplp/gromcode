//function getArrayBounds {}
//const numbers = [1, 2, 4];

//const numberOfElements = numbers.length;
//console.log(numberOfElements);

//console.log('Elements #1: ' + numbers[1]);
//console.log('Element #0: ' + numbers[0]);
//console.log('Element last: ' + numbers[numbers.length - 1]);

//[11, 22, 33, 55, 66] => 


function getArrayBounds(arr) {
    if (!Array.isArray(arr)) {
        return null;
    }

    return [arr.length, arr[0], arr[arr.length - 1]];
}