class User {
    constructor(id, name, sessionId) {
        this._id = id;
        this._name = name;
        this._sessionId = sessionId;
    }
    get id() {
        return this._id
    }
    get name() {
        return this._name
    }
    get sessionId() {
        return this._sessionId
    }
};
class UserRepository {
    constructor(users) {
        this._users = Object.freeze(users);
    }
    get users() {
        return this._users;
    }
    getUserNames() {
        return this._users.map(arr((el) => el._name));
    }
    getUserIds() {
        return this._users.map(arr((el) => el._id));
    }
    getUserNameById(id) {
        for (let i of this._users) {
            if (i.id === id)
                return i.name;
        }

    }
}
export { User, UserRepository };