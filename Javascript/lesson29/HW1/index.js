const getRandomDelay = (from, to) => from + Math.random() * (to - from);
const requestUserData = (userId, callback) => {
    const randomDelay = getRandomDelay(1, 3);
    if (userId === "broken") {
        setTimeout(() => {
            callback(null, "Failed to load user data");
        }, randomDelay);
    } else {
        setTimeout(() => {
            callback({
                userId,
                email: `${userId}@example.com`,
            });
        }, randomDelay);
    }
};
export { requestUserData };