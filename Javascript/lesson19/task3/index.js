const user = {
    firstName: 'John',
    lastName: 'Doe',
    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    },
    set fullName(value) {
        const [firstName, lastName] = value.split(' '); // даст массив 
        this.firstName = firstName; // присвоить соответсвующее ствойство  обьекта 
        this.lastName = lastName;

    },
};
export default user;