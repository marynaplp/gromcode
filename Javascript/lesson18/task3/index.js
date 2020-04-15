const sumOfSquares = () => {
    return [].reduce.apply(arguments, (acc, el) => {
        return acc + (el * el);
    }, 0);
}
export { sumOfSquares }