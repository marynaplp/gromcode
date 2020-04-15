const sumOfSquares = (num) => {
    return [].reduce.apply(arguments, (sum, n) => {
        return (n * n) + sum;
    }, 0)
}
export { sumOfSquares }