class Order {
    constructor(price, city, type) {
        this.id = `${Math.random()}`;
        this.price = price;
        this.dateCreated = new Date();
        this.isConfirmed = place();
        this.dateConfirmed = new Time();
        this.type = type;

    }
    checkPrice() {
        if (this.price > 1000) {
            return true;
        } else return false;

    }
    confirmOrder() {
        this.isConfirmed = true;
        this.dateConfirmed = new Time();
    }
    isValidType() {
        if (this.type === 'Buy' || this.type === 'Sell') {
            return true
        } else return false;
    }
}
export { Order }