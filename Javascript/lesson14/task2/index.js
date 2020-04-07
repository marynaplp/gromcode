export const createMessanger = () => {
    let message = 'Hi!'

    function sendMessage(name) {
        const sender = 'Gromcode';
        console.log(`${name}, ${message}.You ${sender}`)
    }

    function setMessage(text) {
        message = test;
    }
    return {
        sendMessage,
        setMessage,
    };
};
const messenger = createMessanger();
messenger.sendMessage('Bob');