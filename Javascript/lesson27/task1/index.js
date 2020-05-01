 localStorage.setItem('hobbies', JSON.stringify({ name: 'Tom' }));
 localStorage.setItem('name', JSON.stringify('Tom'));
 localStorage.setItem("age", JSON.stringify(17));
 console.log(JSON.parse(localStorage.getItem('hobbies')));


 const getLocalStorageData = () => {
     return Objsct.entries(localStorage)
         .reduce((acc, [key, value]) => {
             return {
                 ...acc,
                 [key]: JSON.parse(value),
             };
         }, {});

 };



 console.log(getLocalStorageData());
 export { getLocalStorageData }