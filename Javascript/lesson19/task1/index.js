export const vehicle = {
    move() {
        console.log('is moving')
    },
    stop() {
        console.log('stopped')
    }
};

export const ship = {
    name: 'Argo',
    startMachine() {
        console.log('lifting anchor up');
    },
    stopMachine() {
        console.log('lifting anchor down');
    },
    __proto__: vehicle
};
console.log(ship)