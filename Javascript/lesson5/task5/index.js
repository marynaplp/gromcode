function getSum(a, b) {
    let sum = 0;
    do {
        if (a % 2 === 0) {
            sum += a;
            console.log(sum);
        }
        a++;
    } while (a <= b);

    return (sum);
}