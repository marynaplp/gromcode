 export const createLogger = () => {
     let memo = [];

     function warn(el) {
         memo.push({
             message: el,
             dateTime: new Date(),
             type: 'warn',
         });
     };

     function error(el) {
         memo.push({
             message: el,
             dateTime: new Date(),
             type: 'error',
         });
     };

     function log(el) {
         memo.push({
             message: el,
             dateTime: new Date(),
             type: 'log',
         });
     };

     const getRecords = (type) => {

         if (type !== undefined) {
             let result = memo.filter(el => el.type === type)
                 .sort((a, b) => b.dateTime - a.dateTime);
             console.log(result)
             return result;
         } else {
             return memo.sort((a, b) => b.dateTime - a.dateTime);
         };
     };

     return {
         warn,
         error,
         log,
         getRecords,
     };
 };