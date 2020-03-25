function sum(from, to) {
    return from + to;
}

function compareSums(a, b, c, d) {
    let firstSum = sum(a, b);
    let secondSum = sum(c, d);
    if (fistSum > secondSum) {
        return true;
    } else {
        return false;
    }

}