const vehicle = {
    name: 'Argo',
    move() {
        console.log(`${this.name} is moving`);
    },
    stop() {
        console.log(`${this.name} stopped`);
    },
};

const ship = {
    startMachine() {
        hasWheeles: false;
        // method
        console.log(`${this.name} lifting anchor up`);
        this.move();

    },
    stopMachine() {
        this.stop();
        console.log(`${this.name} lifting anchor down`);
    },
    __proto__: vehicle, // является getter и setter  для свойства  [ Prototype]
};
export { vehicle, ship };