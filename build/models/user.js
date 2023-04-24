"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var _a, _User_users, _User_id;
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
class User {
    constructor(username) {
        _User_id.set(this, void 0);
        this.username = username;
        __classPrivateFieldGet(User, _a, "f", _User_users).push(this);
        __classPrivateFieldSet(this, _User_id, __classPrivateFieldGet(User, _a, "f", _User_users).length, "f");
    }
    ;
    get id() { return __classPrivateFieldGet(this, _User_id, "f"); }
    set id(_id) { throw new Error("Can not set id manually."); }
    static get users() { return __classPrivateFieldGet(User, _a, "f", _User_users); }
    static set users(users) { throw new Error("Can not set users manually."); }
}
_a = User, _User_id = new WeakMap();
_User_users = { value: [] };
exports.User = User;
;
