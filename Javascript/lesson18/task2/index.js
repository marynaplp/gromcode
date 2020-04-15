'use strict'

const wallet = {
    transactions: [1, 4, 6, 7],
    getMax() {
        return Math.max.apply(null, this.transactions);

    },
    getMin() {
        return Math.min.apply(null, this.transactions);
    }

};
export { wallet };