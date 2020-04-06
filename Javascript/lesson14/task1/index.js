const message = 'Just learn it';

export const sendMessage = (name) => {
    const sender = 'Gromcode';

    console.log(`${name}, ${message}! You ${sender}`);

}
export function sendMessage(text) {
    message = text;
}
//sendMessage('Ann')