let sum = 0;
for (let i = 0; i <= 1000; i++) {
    sum += i;
};

let whole = sum / 1234;
let remainder = sum % 1234;

while (whole < remainder) {
    console.log('true');
}
while (whole > remainder) {
    console.log('false');
}