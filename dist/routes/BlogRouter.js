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
class BlogRouter {
    constructor() {
        this.path = '/blogs';
        this.addBlogItem = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            console.log("add Blog Item request arrived " + req.body);
            yield BlogRepository_1.default.addBlogData(req.body);
            console.log("Blog data added");
            //  const data: any = await br.listAllBlogs();
            res.json(req.body);
        });
        this.listAllBlogs = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            console.log("list Blogs request arrived " + req.body);
            const data = yield BlogRepository_1.default.listAllBlogs();
            console.log("list Blogs request arrived " + data);
            res.send(data);
        });
        this.listBlogById = (req, res, next) => {
            res.send("hi id");
        };
        this.listBlogsByTopic = (req, res, next) => {
        };
        this.updateBlogById = (req, res, next) => {
        };
        this.deleteBlogById = (req, res, next) => {
        };
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
exports.BlogRouter = BlogRouter;
exports.default = BlogRouter;
//# sourceMappingURL=BlogRouter.js.map