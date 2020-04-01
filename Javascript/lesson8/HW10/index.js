//const Obj = { 'John Doe': 19, 'Tom': 17, 'Bob': 18 };

const getAdults = (object) => {
    const getAdults = {};
    for (let age in object) {
        if (age => 18) {
            getAdults[age] = obj[age]
        }
    }
    return getAdults;
}