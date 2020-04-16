function User(name, age) {
    this.name = name;
    this.age = age;
}
User.prototype.sayHi = function() {
        console.log(`Hi, I am ${name}`);

    },
    User.prototype.NewPhoto = function() {
        console.log(`New photo request was sent for ${name}`);
    }
User.prototype.setAge = function() {
    if (age < 0) return false;
    this.age = age;
    if (age >= 25) {
        console.log(`New photo request was sent for ${name}`);
    }
    return age
}