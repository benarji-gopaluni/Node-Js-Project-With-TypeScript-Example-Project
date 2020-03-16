"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const BlogRepository_1 = require("../repository/BlogRepository");
const util_1 = require("util");
class BlogRouter {
    constructor() {
        this.path = '/blogs';
        this.addBlogItem = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            console.log("add Blog Item request arrived " + JSON.stringify(req.body));
            yield BlogRepository_1.default.addBlogData(req.body);
            console.log("Blog data added");
            const data = yield BlogRepository_1.default.listAllBlogs();
            res.json(data);
        });
        this.listAllBlogs = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            console.log("list Blogs request arrived " + req.body);
            const data = yield BlogRepository_1.default.listAllBlogs();
            console.log("list Blogs request arrived " + data);
            res.send(data);
        });
        this.listBlogById = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            console.log("ListBlogById request arrived " + req.body);
            if (req.body.id) {
                const data = yield BlogRepository_1.default.listBlogById(req.body.id);
                let obj = {};
                obj['status'] = true;
                obj['data'] = data;
                res.send(obj);
            }
            else {
                res.send({
                    "status": false,
                    "error": "id is required, which need to be numeric " + JSON.stringify(req.body) + "\t" + isNaN(req.body.id)
                });
            }
        });
        this.listBlogsByTopic = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            console.log("listByTopic request arrived " + JSON.stringify(req.body));
            if (req.body.topic) {
                const data = yield BlogRepository_1.default.listByTopic(req.body.topic);
                let obj = {};
                obj['status'] = true;
                obj['data'] = data;
                res.send(obj);
            }
            else {
                res.send({ "status": false, "error": "topic is required" });
            }
        });
        this.updateBlogById = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            console.log("updateBlogById request arrived " + JSON.stringify(req.body));
            if (req.body.id && req.body.blog) {
                if (util_1.isObject(req.body.blog)) {
                    const response = yield BlogRepository_1.default.updateBlogById(req.body.id, req.body.blog);
                    res.send({ "status": response });
                }
                else {
                    res.send({ "status": false, "error": "Invalid blog object to update" });
                }
            }
            else {
                res.send({ "status": false, "error": "require id, blog Object to update" });
            }
        });
        this.deleteBlogById = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            console.log("deleteBlogById request arrived " + JSON.stringify(req.body));
            if (req.body.id) {
                const response = yield BlogRepository_1.default.deleteBlogById(req.body.id);
                res.send({ "status": response });
            }
            else {
                res.send({ "status": false, "error": "require id, blog Object to update" });
            }
        });
        this._router = express_1.Router();
        this.initRoutes();
    }
    get router() {
        return this._router;
    }
    initRoutes() {
        this._router.get(`${this.path}/listAll`, this.listAllBlogs);
        this._router.post(`${this.path}/addBlog`, this.addBlogItem);
        this._router.post(`${this.path}/listById`, this.listBlogById);
        this._router.post(`${this.path}/listByTopic`, this.listBlogsByTopic);
        this._router.put(`${this.path}/updateBlogById`, this.updateBlogById);
        this._router.delete(`${this.path}/deleteBlogById`, this.deleteBlogById);
    }
}
BlogRouter.getApiInfo = () => {
    let data = [];
    let obj = {};
    obj["path"] = "/blogs";
    obj["api"] = "listAll";
    obj["method"] = "GET";
    data.push(obj);
    obj = {};
    obj["path"] = "/blogs";
    obj["api"] = "addBlog";
    obj["method"] = "POST";
    data.push(obj);
    obj = {};
    obj["path"] = "/blogs";
    obj["api"] = "listById";
    obj["method"] = "POST";
    data.push(obj);
    obj = {};
    obj["path"] = "/blogs";
    obj["api"] = "listByTopic";
    obj["method"] = "POST";
    data.push(obj);
    obj = {};
    obj["path"] = "/blogs";
    obj["api"] = "updateBlogById";
    obj["method"] = "PUT";
    data.push(obj);
    obj = {};
    obj["path"] = "/blogs";
    obj["api"] = "deleteBlogById";
    obj["method"] = "DELETE";
    data.push(obj);
    return data;
};
exports.BlogRouter = BlogRouter;
exports.default = BlogRouter;
//# sourceMappingURL=BlogRouter.js.map