export const createCalculator = obj => {
    let memo = 0;
    return {
        add(num) {
            memo += num;
        },

        decrease(num) {
            memo -= num;
        },

        reset(num) {
            memo = 0;
        },

        getMemo(memory) {
            return memo;
        }
    }
}