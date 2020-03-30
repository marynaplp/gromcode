function withdraw(clients, balances, client, amount) {
    let result = client.findIndex(el => el === client);
    if (clients[result] == client) {
        if (balances[result] > amount) {
            return balances[result] -= amount;
        }
        if (balances[result] < amount) {
            return -1;
        }

    }

}