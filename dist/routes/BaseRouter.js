"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const Utils_1 = require("../utils/Utils");
let jwt = require('jsonwebtoken');
class BaseRouter {
    constructor() {
        this.path = '/';
        this.greetMessage = (req, res, next) => {
            res.json({ "message": "Welcome To All", "timestamp": new Date() });
        };
        this.login = (req, res, next) => {
            if (req.body.username == 'test' && req.body.password == 'password') {
                let token = jwt.sign({ 'username': req.body.username }, Utils_1.default.secret_key, {
                    'expiresIn': '24h' //h-hours,m-min,s-secs
                });
                res.json({ 'success': true, 'message': 'Authentication Successfull', 'token': token });
            }
            else {
                res.json({ 'success': false, 'message': 'Authentication Failed', 'token': null });
            }
        };
        this._router = express_1.Router();
        this.initRoutes();
    }
    get router() {
        return this._router;
    }
    initRoutes() {
        this._router.get(`${this.path}`, this.greetMessage);
        this._router.post(`/login`, this.login);
    }
}
exports.BaseRouter = BaseRouter;
exports.default = BaseRouter;
//# sourceMappingURL=BaseRouter.js.map