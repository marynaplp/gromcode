const getSpecialNumbers = numbers => {
    let specialNumber = [];
    for (let i = 0; i < numbers; i++) {
        if (numbers[i] % 3 === 0) {
            getSpecialNumbers.push(numbers[i]);

        }
    }
    return getSpecialNumbers;
};