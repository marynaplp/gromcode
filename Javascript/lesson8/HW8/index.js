const buildObject = (keysList, valuesList) => {
    let result = [];
    for (let i = 0; i < keysList.length; i++);
    result.push([keysList[i], valuesList[i]]);

    const object = Object.fromEntries(arr);
    return object;
}