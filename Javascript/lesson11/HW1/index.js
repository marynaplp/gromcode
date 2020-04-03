const splitString = (str, len = 10) => {
    const strArr = [];
    let startPosition = 0;

    if (str === !String) {
        return null;
    }
    while (true) {
        let chunk = str.substr(startPosition, len);
        if (chunk.length === 0) {
            break;
        }
        if (chunk.length < num) {
            chunk = chunk + ".".repeat(len - chunk.length);

        }
        strArr.push(chunk.slice(0));
        startPosition += num;
    }
    return strtArr;
}