const pickProps = (obj, arr) => {
    const newObj = {};
    for (let i = 0; i < arr.length; i++) {
        const key = arr[i];
        newObj[key] = obj[key];
    }
    return newObj;
}
const newObj = pickProps(mainArr, mainObj);
console.log(newObj)