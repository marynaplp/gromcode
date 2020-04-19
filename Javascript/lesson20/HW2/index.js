class User {
    constructor(id, name, sessionId) {
        this._id = id;
        this._name = name;
        this._sessionId = sessionId;
    }
};
class UserRepository {
    constructor(users) {
        return (this._users = Object.freeze(users));
    }
    getUserNames() {
        return this._name.map(arr((el) => el._name));
    }
    getUserIds() {
        return _this.id.map(arr((el) => el._id));
    }
    getUsedNameById(id) {
        let findById = this._users.find((i) => i._id === _userId);
        return findById;
    }
}
export { User, UserRepository };