const splitString = (text, num = 10) => {
    const strArr = [];
    let startPosition = 0;

    if (text === !String) {
        return null;
    }
    while (true) {
        let chunk = str.substr(startPosition, num);
        if (chunk.length === 0) {
            break;
        }
        if (chunk.length < num) {
            chunk = chunk + '.'.repeat(chunk.length - num);

        }
        strArr.push(chunk.slice(0));
        startPosition += num;
    }
    return strtArr;
}