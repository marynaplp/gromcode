function saveCalls(allCalls) {
    function withMemory(args) {

        withMemory.calls.push([...arguments]);
        return allCalls.call(this, arguments);
    }
    withMemory.calls = [];
    return withMemory;
}
export { saveCalls }