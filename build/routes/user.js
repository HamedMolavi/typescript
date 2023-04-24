"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userPostHandler = exports.userGetHandler = void 0;
const user_1 = require("../models/user");
const userGetHandler = function (req, res) {
    res.send({ succes: true, result: user_1.User.users });
};
exports.userGetHandler = userGetHandler;
const userPostHandler = function (req, res) {
    const username = req.body['username'];
    try {
        const user = new user_1.User(username);
        res.send({ succes: true, result: 'OK' });
    }
    catch (_a) {
        res.send({ succes: true, result: 'failed!' });
    }
};
exports.userPostHandler = userPostHandler;
