class Wallet {
    balance = 0;

    getBalance() {
        return this.balance;
    }
    deposit(amount) {
        return this.balance += amount;
    }
    withdraw(amount) {
        if (amount > this.balance) {
            console.log('Not enough funds');
            return;
        }
        this.balance -= amount;
    }
}
export { Wallet }