function withdraw(clients, balances, client, amount) {
    for (let j = 0; j < clients.length; j++) {
        if (clients[j] == client) {
            if (balances[i] - amount >= 0) {
                return balances[i] - amount;
            } else {
                return -1;
            }

        }

    }
}