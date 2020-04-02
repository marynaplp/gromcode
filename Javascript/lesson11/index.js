const splitText = text => {
    const strArr = [];
    let startPosition = 0;
    while (true) {
        let chunk = text.substr(startPosition, len);
        strArr.push(chunk[0].toUpperCase() + chunk.slice(1));
        startPosition += len;
        if (chunk.length === 0) {
            break;
        }
    }

};

// текст  делем на куски :; ''abbcc'  4 => ['abcd', 'efg'] =>["Abcdfg", "Efg"]