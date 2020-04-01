const getAdults = { 'John Doe': 19, 'Tom': 17, 'Bob': 18 };

const getAdults = (obj) => {
    const adults = {};
    for (let age in obj) {
        if (obj[age] = 18) {
            adults[age] = obj[age]
        }
    }
    return adults;
}