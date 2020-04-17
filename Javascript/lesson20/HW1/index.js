class Order {
    constructor(price, city, type) {
        this.id = `${Math.random()}`;
        this.price = price;
        this.dateCreated = newDate();
        this.isConfirmed = place();
        this.dateConfirmed = newTime();
        this.type = type;

    }
    checkprice() {
        if (this.price > 1000) {
            return true;
        } else return false;

    }
    confirmOrder() {
        this.isConfirmed = true;
        this.dateConfirmed = newTime();
    }
    isValidType() {
        if (this.type === 'Buy' || this.type === 'Sell') return true
        else return false;
    }
}
export { Order }