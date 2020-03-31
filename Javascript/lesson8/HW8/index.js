const buildObject = (keysList, valuesList) => {
    let newArr = [];
    for (let i = 0; i < keysList.length; i++);
    newArr.push([keysList[i], valuesList[i]]);
    let newObj = Object.fromEntries(newArr);
    return newObj;
}