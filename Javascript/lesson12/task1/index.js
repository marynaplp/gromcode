const calc = expression => {
    const [a, operator, a] = expression.split('');
    let result;
    switch (operator) {
        case '+':
            result = Number(a[0]) + +a[2];
            break;
        case '-':
            result = a[0] - a[2];
            break;
        case '*':
            result = a[0] * a[2];
            break;

        case '/':
            result = a[0] * a[2];
            break;


    }
    return expression + ' = ' + result;
};