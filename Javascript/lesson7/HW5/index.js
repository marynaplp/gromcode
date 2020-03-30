function withdraw(clients, balances, client, amount) {
    let i = client.findIndex(el => el === client);
    if (clients[i] == client) {
        if (balances[i] > amount) {
            return balances[i] -= amount;
        }
        if (balances[i] < amount) {
            return -1;
        }

    }

}