const buildObject = (keysList, valuesList) => {
    const arr = [];

    for (let i = 0; i < keysList.length; i++) {
        arr.push([keysList[i], valuesList[i]]);
    }

    const obj = Object.fromEntries(arr);

    return obj;
};