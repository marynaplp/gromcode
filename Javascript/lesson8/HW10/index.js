//const getAdults = { 'John Doe': 19, 'Tom': 17, 'Bob': 18 };

const getAdults = (object) => {
    const adults = {};
    for (let age in object) {
        if (object[age] >= 18) {
            adults[age] = object[age]
        }
    }
    return adults;
}