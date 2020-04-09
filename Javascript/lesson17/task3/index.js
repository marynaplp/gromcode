function defer(fund, ms) {
    return function() {
        setTimeout(() => func.apply(this, arguments), ms);
    }
}
export { defer };