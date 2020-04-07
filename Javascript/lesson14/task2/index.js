 const createMessenger = () => {
     let message = 'Hi!'

     export function sendMessage(name) {
         const sender = 'Gromcode';
         console.log(`${name}, ${message}.Your ${sender}`)
     }

     export function setMessage(text) {
         message = test;
     }
     return {
         sendMessage,
         setMessage,
     };
 };
 const messenger1 = createMessenger();
 messenger1.sendMessage('Bob');
 const messenger2 = createMessenger();
 messenger2.sendMessage('Tom');
 messenger2.setMessage('Hello');

 messenger1.sendMessage('Ann');