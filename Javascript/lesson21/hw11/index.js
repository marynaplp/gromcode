function squaredNumbers() {
    const squaredNum = document.querySelectorAll('li[data-number]');
    squaredNum.forEach(function(el) {
        el.dataset.squaredNum = el.dataset.number * el.dataset.number
    });

}
export {
    squaredNumbers
}