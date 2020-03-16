"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const BlogRouter_1 = require("./BlogRouter");
class BaseRouter {
    constructor() {
        this.path = '/';
        this.greetMessage = (req, res, next) => {
            let data = BlogRouter_1.default.getApiInfo();
            res.json({
                "message": "Welcome To All",
                "timestamp": new Date(),
                "Msg": "This is a localstorage based node js project to init with basic data call /blogs/init",
                "apis": data
            });
        };
        this._router = express_1.Router();
        this.initRoutes();
    }
    get router() {
        return this._router;
    }
    initRoutes() {
        this._router.get(`${this.path}`, this.greetMessage);
    }
}
exports.BaseRouter = BaseRouter;
exports.default = BaseRouter;
//# sourceMappingURL=BaseRouter.js.map