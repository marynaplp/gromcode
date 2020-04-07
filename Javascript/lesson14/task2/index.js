 export default function createMessenger() {
     let message = 'Just learn it!';
     let sender = 'Gromcode';

     function sendMessage(name) {

         console.log(`${name}, ${message}.Your ${sender}`);
     }

     const setMessage = text => {
         message = text;
     }

     const setSender = text => {
         sender = text;
     }
     return {
         sendMessage,
         setMessage,
         setSender,
     };
 };
 const result = createMessenger();
 console.log(result);