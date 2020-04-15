function sumOfSquares() {
    return [...arguments].reduce((acc, el) => {
        return acc + (el * el);
    }, 0);
}
export { sumOfSquares }