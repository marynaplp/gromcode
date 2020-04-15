'use strict';
const event = {
    guests: [{
        name: 'John',
        age: 18,
        email: 'example@server.com'
    }],
    message: "Welcome to the party",
    getInvitations() {
        return this.guests
            .filter(({ age }) = age >= 18)
            .map(({ name, email }) => ({
                text: `Hi ${name}.${this.message}`,
            }))

    }
}
console.log(event.getInvitations());
export { event }