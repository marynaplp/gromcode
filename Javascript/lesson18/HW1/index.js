function saveCalls(allCalls) {
    function withMemory(args) {

        withMemory.calls.push([...args]);
        return allCalls.calls.apply(this, args);
    }
    withMemory.calls = [];
    return withMemory;
}
export { saveCalls }