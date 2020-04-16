const vechicle = {
    move() {
        console.log('is moving')
    },
    stop() {
        console.log('stopped')
    }
};

const ship = {
    name: 'Argo',
    startMachine() {
        console.log('lifting anchor up');
    },
    stopMachine() {
        console.log('lifting anchor down');
    },
    __proto__: vehicle
};