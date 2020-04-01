 const getAdults = userObj => Object.entries(userObj)
     .filter(user => user[1] >= 18)
     .map(user => user[0]); //прошлись по  массиву и его вернули

 //const getAdults = userObj => {
 // {'Tom': 17, 'John Doe':19,} =>[ ['Tom:' 17],['John Doe', 19] ]
 //  const userArray = Object.entries(usersObj);
 //  c помощьюObject.Entries преобразил в массив массивов;(в большом массиве находится маленький массив)

 // {'Tom': 17, 'John Doe':19,} =>[ ['John Doe', 19] ] 
 //const filteredUsersArray = userArray // отфлитовала массив
 //  .filter(user => user[1] >= 18); // получился массив массивов но  с меньшим к-ством элементов

 //Достали ['John Doe', 19] ] 
 //const userNames = filteredUsersArray // прошлись по  массив массивом и взяли один елемент 
 //   .map(user => user[0]);
 //return usersNames; // вернули его 
 //}
 //console.log(getAdults(users));