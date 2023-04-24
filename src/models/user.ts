import { uid, user } from '../types/user'



export class User {
    static #users: Array<user> = [];
    username: string;
    #id: uid;
    constructor(username: string) {
        this.username = username;
        User.#users.push(this);
        this.#id = User.#users.length;
    };
    get id() { return this.#id }
    set id(_id) { throw new Error("Can not set id manually."); }

    static get users() { return User.#users }
    static set users(users) { throw new Error("Can not set users manually."); }
};

