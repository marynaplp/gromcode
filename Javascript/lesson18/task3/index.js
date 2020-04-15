const sumOfSquares = () => {
    return [].reduce.apply(arguments, (sum, el) => {
        return (el * el) + sum;
    }, 0)
}
export { sumOfSquares }