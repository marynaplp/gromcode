const getAdults = { 'John Doe': 19, 'Tom': 17, 'Bob': 18 };

const getAdults = (object) => {
    const getAdults = {};
    for (let age in object) {
        if (object[age] = 18) {
            getAdults[age] = object[age]
        }
    }
    return getAdults;
}