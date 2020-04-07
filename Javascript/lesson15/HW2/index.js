 export const createLogger = () => {
     let memo = [];

     function warn(elem) {
         memo.push({
             message: elem,
             dateTime: new Date(),
             type: 'warn',
         });
     };

     function error(elem) {
         memo.push({
             message: elem,
             dateTime: new Date(),
             type: 'error',
         });
     };

     function log(elem) {
         memo.push({
             message: elem,
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