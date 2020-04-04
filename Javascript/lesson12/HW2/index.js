const cleanTransactionsList = (arr) => {
    let result = arr.filter(el => {
        console.log(Number(el));
        if (Number(el)) {
            return el;
        }
    });
    return result.map(item => "$" + (+el).toFixed(2));
};