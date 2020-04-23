function squaredNumbers() {
    const squaredNum = document.querySelectorAll('.number');
    squaredNum.forEach(function(el) {
        el.dataset.squaredNum = el.dataset * el.dataset
    });

}
export { squaredNumbers }