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
    get users() {
        return this._users;
    }
    getUserNames() {
        return this._name.map(arr((el) => el._name));
    }
    getUserIds() {
        return _this.id.map(arr((el) => el._id));
    }
    getUsedNameById(id) {
        for (let i of this._users) {
            if (i.id === id)
                return i.name;
        }

    }
}
export { User, UserRepository };