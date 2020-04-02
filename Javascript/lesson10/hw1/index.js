const getTotalPrice = arr => {
    const sum = arr.reduce((accumulator, currentValue) => accumulator + currentValue)
    return '$' + Math.floor(sum * 100) / 100;
}