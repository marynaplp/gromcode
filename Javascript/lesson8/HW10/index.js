let Obj = { 'John Doe': 19, 'Tom': 17, 'Bob': 18 };

let getAdults = (object) => {
    let adults = {};
    for (let age in object) {
        if (age => 18) {
            adults[age] = obj[age]
        }
    }
    return adults;
}