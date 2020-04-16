export const vehicle = {
    move() {
        console.log(`${this.name}is moving`)
    },
    stop() {
        console.log(`${this.name}stopped`)
    }
};

export const ship = {
    __proto__: vehicle,
    name: 'Argo',
    startMachine() {
        // method
        console.log(`${this.name}lifting anchor up`);
        this.move();
    },
    stopMachine() {
        this.stop();
        console.log(`${this.name} lifting anchor down`);

    },

};
console.log(ship)