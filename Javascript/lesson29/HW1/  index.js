const requestUserData = (userId, callback) => {
    if (userId == 'broken') {
        callback(null, 'Failed to load user data');
        return;
    }
    let object = {
        userId,
        email: 'userid777@example.com'
    };
    callback = (object);
}
export {
    requestUserData
}