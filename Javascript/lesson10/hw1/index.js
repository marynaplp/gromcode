const getTotalPrice = num => {
    const result = arr.reduce((a, b) => a + b)
    return '$' + Math.floor(result * 100) / 100;
}