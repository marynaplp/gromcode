const cleanTransactionsList = (arr) => {
    let result = arr.filter(el => {
        console.log(Number(el));
        if (typeof(+el) === 'number' && !isNaN(el)) {
            return el;
        }
    });
    return result.map(el => "$" + (+el).toFixed(2));
};