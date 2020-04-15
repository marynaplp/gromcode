function safeCalls(allCalls) {
    function withMemory(args) {

        withMemory.calls.push([...args]);
        return allCalls.calls(this, args);
    }
    withMemory.calls = [];
    return withMemory;
}
export { safeCalls }