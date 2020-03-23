const m = 1;
const n = 20;
let sum = 0;

for (let i = m; i <= n; i++) {
    if (i % 2 === 0 && i % 4 !== 0) {
        sum += i;
    } else if (i % 3 === 0) {
        sum = sum - i;
    } else if (i % 4 === 0) {
        sum = sum * i;
    }
    if (i % 5 === 0) {
        sum = i;
    }
};
console.log(sum);