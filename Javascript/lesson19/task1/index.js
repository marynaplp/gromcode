export const vehicle = {
    move() {
        console.log(`${name}is moving`)
    },
    stop() {
        console.log(`${name}stopped`)
    }
};

export const ship = {
    __proto__: vehicle,
    name: 'Argo',
    startMachine() {
        console.log(`${name}lifting anchor up`);
    },
    stopMachine() {
        console.log(`${name} lifting anchor down`);
    },

};
console.log(ship)