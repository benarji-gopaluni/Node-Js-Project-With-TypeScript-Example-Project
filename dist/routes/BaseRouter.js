"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
class BaseRouter {
    constructor() {
        this.path = '/';
        this.greetMessage = (req, res, next) => {
            res.json({ "message": "Welcome To All", "timestamp": new Date() });
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