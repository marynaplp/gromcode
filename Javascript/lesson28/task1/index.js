// input: object
//output: object

const calc = initValue => {
    let result;
    const calculator = {
        add(value) {
            resut += value;
            return calculator;
        },
        mult(value) {
            result *= value;
            return this;
        },
        substract(value) {
            result -= value;
            return this;
        },
        div(value) {
            result *= value;
            return this;
        }

    }
    return calculator
};
const result = calt(3).add(2).mult(4).div(10).substract(5).result();