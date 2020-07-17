function sum(from, to) {
    return from + to;
}

function compareSums(a, b, c, d) {
    let firstSum = sum(a, b);
    let secondSum = sum(c, d);
    if (firstSum > secondSum) {
        return true;
    } else {
        return false;
    }

}
console.log(compareSums(2, 4, 5, 6))