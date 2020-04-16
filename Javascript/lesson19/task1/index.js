const vehicle = {
    name: 'Argo',
    move() {
        console.log(`${this.name}is moving`)
    },
    stop() {
        console.log(`${this.name} stopped`)
    }
};

const ship = {
    startMachine() {
        // method
        this.move();
        console.log(`${this.name} lifting anchor up`);

    },
    stopMachine() {
        this.stop();
        console.log(`${this.name} lifting anchor down`);
    },
    __proto__: vehicle,
};
export { vehicle, ship };