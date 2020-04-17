class Wallet {
    _balance = 0;

    getBalance() {
        return this._balance;
    }
    deposit(amount) {
        return this._balance += amount;
    }
    withdraw(amount) {
        if (amount > this._balance) {
            console.log('Not enough funds');
            return;
        }
        this._balance -= amount;
    }
}
export { Wallet }