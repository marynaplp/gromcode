let memo = 0

function add(num) {
    memo += num;
}

function decrease(num) {
    memo -= num;
}

function reset(num) {
    memo = 0;
}

function getMemo(memory) {
    return memo;
}
export { add, decrease, reset, getMemo }