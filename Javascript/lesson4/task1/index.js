//  переменная которая виведеть  цифри от 1 до 10
let n = 1; // начальное условие 
while (n <= 10) { // условие вихода из  цикла
    console.log(n); // тело цикла
    n++; // на каждом шагу увеличиваться переменная, инкрементация значения
}
// посчитать сумму
// Алгоритм : прибавлять все значения которые будут прибавлятся на каждой операции
let n = 100;
let sum = 0;
// (хранение суммы)
while (n > 0) {
    sum += n;
    n -= 1;
}

console.log('Result: ' + sum);