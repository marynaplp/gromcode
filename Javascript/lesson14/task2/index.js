let message = 'Hi!'
export const createMessanger = () => {
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