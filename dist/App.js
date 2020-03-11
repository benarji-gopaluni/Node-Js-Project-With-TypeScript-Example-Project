"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const bodyparser = require("body-parser");
const BaseRouter_1 = require("./routes/BaseRouter");
const BlogRouter_1 = require("./routes/BlogRouter");
class App {
    constructor() {
        this.express = express();
        this.initRouters();
    }
    initRouters() {
        this.express.use(bodyparser.json());
        this.express.use('/', new BaseRouter_1.default().router);
        this.express.use('/', new BlogRouter_1.default().router);
    }
}
exports.default = new App().express;
//# sourceMappingURL=App.js.map