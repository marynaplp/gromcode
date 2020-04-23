function squaredNumbers() {
    const squareNum = document.querySelectorAll('.number');

    for (let num of squareNum) {
        const numSquare = num.getAttribute('data-number') * num.getAttribute('data-number');
        num.dataset.squaredNumber = numSquare;
    }
};
export { squaredNumber }