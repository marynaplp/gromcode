class User {
    constructor(id, name, sessionId) {
        this.id = id;
        this.name = name;
        this.sessionId = sessionId;
    };

};
class UserRepository {
    constructor(arr) {
        return this.users = Object.freeze(arr);
    }
    getUserNames(arr) {
        return this.name.map(arr(i => i.name));
    }
    getUserIds(arr) {
        return this.id.map(arr(i => i.id));

    }
    getUsedNameById(UserId) {
        let findById = this.users.find(i => i._id === userId);
        return findById;

    }
}