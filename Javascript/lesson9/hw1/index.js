const customers = {
    'customer-id-1': {
        name: 'Wiliam',
        age: 54
    },
    'customer-id-2': {
        name: 'Tom',
        age: 17
    },
};

const getCustomersList = usersObj => Object.entries(usersObj);
return userArray.map(user => ({ id: user[0], ...usersObj[user[0]] }))
    .sort((a, b) => a.age > b.age);

console.log(getCustomerList(customers))