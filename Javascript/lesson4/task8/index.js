let sum = 0;

for (let i = 0; i <= 1000; i++) {
    sum += i;
};

let whole = sum / 1234;
let divided = sum % 1234;

while (whole < divided) {
    console.log('true');
}
while (whole > divided) {
    console.log('false');
    break;
}