function superRound(num, round) {
    const result = Math.floor(num, round);
    return [
        Math.floor(num * result) / result,
        Math.round(num * result) / result,
        Math.ceil(num * result) / result,
        Math.trunc(num * result) / result, +num.toFixed(result),
    ]
}