const splitString = (str, num) => {
    const strArr = [];
    let startPosition = 0;

    if (str === !String) {
        return null;
    }
    if (len === undefined) {
        num = 10;
    }
    while (true) {
        let chunk = str.substr(startPosition, num);
        if (chunk.length === 0) {
            break;
        }
        if (chunk.length < num) {
            chunk = chunk + ".".repeat(num - chunk.length);

        }
        strArr.push(chunk.slice(0));
        startPosition += num;
    }
    return strtArr;
}