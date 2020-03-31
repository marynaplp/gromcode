const addPropertyV1 = (obj, key, value) => {
    obj[key] = value;
    return obj

}

const addPropertyV2 = (obj, key, value) => {
    const newObj = Object.assign(
        obj, [key], value);
    return newObj

}

const addPropertyV3 = (obj, key, value) => {
    const newObj = Object.assign({}, obj, {
        [key]: value
    });
    newObj[key] = value;
    return newObj;

}

const addPropertyV4 = (obj, key, value) => {
    const newObj = Object.assign({
        ...obj
    }, {
        [key]: value
    });
    return newObj;
}