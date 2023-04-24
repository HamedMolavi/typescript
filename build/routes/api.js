"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const user_1 = require("./user");
user_1.userGetHandler;
exports.router = function () {
    const router = (0, express_1.Router)();
    router.get('/user', user_1.userGetHandler);
    router.post('/user', user_1.userPostHandler);
    return router;
}();
