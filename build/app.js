"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
let port = 3000;
let app = (0, express_1.default)();
const api_1 = require("./routes/api");
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
app.use('/', api_1.router);
app.listen(port, () => {
    console.log(`\n\nServer is running on port = ${port}\n\n`);
});
