// input: object
//output: object

const calc = initValue => {
    let result;
    const calculator = {
        add(value) {
            resut += value;
            return this;
        },

        substract(value) {
            result -= value;
            return this;
        },
        mult(value) {
            result *= value;
            return this;
        },
        div(value) {
            result /= value;
            return this;
        },
        result() {
            return result
        }

    }
    return calculator
};
const result = calc(3).add(2).mult(4).div(10).substract(5).result();
console.log(result)