const pinger = (num, period) => {
    const interval = setInterval(() => {
        console.log('Ping');
    }, period);
    console.log(interval);
}
pinger(5, 1000)