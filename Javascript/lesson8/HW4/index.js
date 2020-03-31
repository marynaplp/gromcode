function addPropertyV1(userData, userId) {
    userData.Id = userId;
    return userData;
}

function addPropertyV2(userData, userId) {
    userData.Id = userId; // значение
    const NewObj = Object.assign({}, userData);
    return NewObj;
}

function addPropertyV3(userData, userId) {
    userData.Id = userId;
    const NewObj = Object.assign({}, userData);
    NewObj.id = userId;
    return NewObj;
}

function addPropertyV3(userData, userId) {
    userData.Id = userId;
    const NewObj = {...userData };
    NewObj.id = userId;
    return NewObj;
}