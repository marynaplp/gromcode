let result = 0;

for (let m = 0; m <= 1000; m++) {
    if (m % 2 != 1) {
        console.log('Found');
        result += m;
    }
}

if (result * 5 > 5000) {
    console.log('Bigger');
} else {
    console.log('Smaller or equal');
}