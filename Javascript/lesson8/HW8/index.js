const buildObject = (keyList, valuesList) => {
    let result = [];
    for (let i = 0; i < keyList.length; i++);
    result.push([keyList[i], valuesList[i]]);

    const Object = Object.fromEntries(arr);
    return Object;
}