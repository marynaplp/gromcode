const cleanTransactionsList = (arr) => {
    let strArray = arr.filter(item => {
        console.log(Number(item));
        if (Numbebr(item)) {
            return item;
        }
    });
    return strArray.map(item => "$" + (+item.toFixed(2)));
};