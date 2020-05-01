 localStorage.setItem('hobbies', JSON.stringify({ name: 'Tom' }));
 console.log(JSON.parse(localStorage.getItem('hobbies')));

 const getLocalStorageDate = () => {
     return Objsct.entries(localStorage)
         .reduce((acc, [key, value]) => {
             return {
                 ...acc,
                 [key]: value,
             };
         }, {});

 };



 console.log(getLocalStorageData());
 export { getLocalStorageDate }