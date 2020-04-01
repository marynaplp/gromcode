const pickProps = (obj, arr) => {
    let newObj = {};
    for (let i = 0; i < arr.length; i++)
        const key = arr[i];
    newObj[key] = obj[key];

    return newObj;
}