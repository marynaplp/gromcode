const getSpecialNumbers = numbers => {
    let specialNumbers = [];

    numbers.forEach(function checkIfSpecialNumber(num) {
        if (num % 3 === 0) {
            specialNumbers.push(num);
        }
    });
    // for (let i = 0; i < numbers.length; i++) {

    // if (numbers[i] % 3 === 0) {
    //   specialNumbers.push(numbers[i]);
    //
    //  }
    //  }
    return specialNumbers;
};