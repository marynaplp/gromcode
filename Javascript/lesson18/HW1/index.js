function safeCalls(allCalls) {
    function withMemory() {

        withMemory.calls.push([...arguments]);
        return allCalls.calls.apply(this, arguments);
    }
    withMemory.calls = [];
    return withMemory;
}
export { safeCalls };