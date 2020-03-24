let sum = 0,
    whole,
    division;

for (let i = 1; i <= 1000; i++) {
    sum += i;
};

whole = sum % 1234;
division = sum / 1234;

console.log(whole < division);