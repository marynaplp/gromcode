const buildObject = (keyList, valueList) => {
    let result = [];
    for (let i = 0; i < keyList.length; i++);
    result.push([keyList[i], valueList[i]]);

    const Object = Object.fromEntries(arr);
    return Object;
}