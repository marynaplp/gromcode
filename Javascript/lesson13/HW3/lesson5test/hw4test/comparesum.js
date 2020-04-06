function compareSums(a, b, c, d) {
    let firstSum = sum(a, b);
    let secondSum = sum(c, d);
    if (firstSum > secondSum) {
        return true;
    } else {
        return false;
    }

}