function safeCalls(func) {
    function withMemory() {

        withMemory.calls.push([...arguments]);
        return Allcalls.calls(this.arguments);
    }
    withMemory.calls = [];
    return withMemory;
}
export { safeCalls };