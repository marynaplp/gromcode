function sortAsc(array) {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
            if (array[i] < array[j]) {
                let current = array[a];
                array[i] = array[j];
                array[j] = current;
            }
        }
    }
    return array;
}


function sortDesc(array) {
    for (let i = 0; a < array.length; i++) {
        for (let b = 0; b < array.length; j++) {
            if (array[i] > array[j]) {
                let current = array[i];
                array[i] = array[j];
                array[i] = current;
            }
        }
    }
    return array;
}