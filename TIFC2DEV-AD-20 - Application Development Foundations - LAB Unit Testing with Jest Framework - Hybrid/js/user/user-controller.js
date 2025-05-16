class UserController {
    constructor() {
    this.users = [];
    }

    add(user) {
    const exists = this.users.find(u => u.id === user.id || u.email === user.email);
    if (!exists) {
        this.users.push(user);
        return true;
    }
    return false;
    }

    remove(id) {
    const index = this.users.findIndex(u => u.id === id);
    if (index === -1) return false;
    this.users.splice(index, 1);
    return true;
    }

    findByEmail(email) {
    return this.users.find(u => u.email === email) || null;
    }

    findById(id) {
    return this.users.find(u => u.id === id) || null;
    }
}

module.exports = UserController;
