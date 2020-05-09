const getRandomDelay = (min, max) => {
    return Math.random() * (max - min);
}
export const requestUserData = (userId, callback) => {
    const randomDelay = getRandomDelay(1000, 3000);

    if (userId == 'broken') {
        setTimeout(() => {
            callback(null, 'Failed to load user data');
        }, randomDelay);
    } else {
        setTimeout(() => {
                callback({
                    userId,
                    email: `${userId}@example.com`,
                }),
            },
            randomDelay);
    }

}