const sortDesc = numbers => {
    numbers.slice().sort((a, b) => b - a);
    return numbers;
};