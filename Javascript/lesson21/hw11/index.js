function squaredNumbers() {
    const squaredNum = document.querySelectorAll('data-number');
    squaredNum.forEach(function(el) {
        el.dataset.squaredNumber = el.dataset.number * el.dataset.number
    });

}
export {
    squaredNumbers
}