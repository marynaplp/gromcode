let m = 0;
let n = 1000;

for (let m = 0; m <= n; m++) {
    if (m % 2 === 1) {
        m += m;
        console.log('Found');
    }
}
if (m * 5 > 5000) {
    console.log('Bigger');
} else {
    console.log('Smaller or equal');
}