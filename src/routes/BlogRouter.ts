import {Request, Response, NextFunction, Router} from 'express';
import br from "../repository/BlogRepository";
import {isObject} from "util";

export class BlogRouter {
    private _router: Router;
    private path: string = '/blogs';


    constructor() {
        this._router = Router();
        this.initRoutes();
    }

    get router(): Router {
        return this._router;
    }

    private initRoutes(): void {
        this._router.get(`${this.path}/listAll`, this.listAllBlogs);
        this._router.post(`${this.path}/addBlog`, this.addBlogItem);
        this._router.post(`${this.path}/listById`, this.listBlogById);
        this._router.post(`${this.path}/listByTopic`, this.listBlogsByTopic);
        this._router.put(`${this.path}/updateBlogById`, this.updateBlogById);
        this._router.delete(`${this.path}/deleteBlogById`, this.deleteBlogById);
    }

    public static getApiInfo: any = () => {
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
    }
    private addBlogItem = async (req: Request, res: Response, next: NextFunction) => {
        console.log("add Blog Item request arrived " + JSON.stringify(req.body));
        await br.addBlogData(req.body);
        console.log("Blog data added")
        const data: any = await br.listAllBlogs();
        res.json(data);
    }
    private listAllBlogs = async (req: Request, res: Response, next: NextFunction) => {
        console.log("list Blogs request arrived " + JSON.stringify(req.body));
        const data: any = await br.listAllBlogs();
        console.log("list Blogs request arrived " + data);
        res.send(data);
    }
    private listBlogById = async (req: Request, res: Response, next: NextFunction) => {
        console.log("ListBlogById request arrived " + JSON.stringify(req.body));
        if (req.body.id) {
            const data: any = await br.listBlogById(req.body.id);
            let obj = {};
            obj['status'] = true;
            obj['data'] = data;
            res.send(obj);
        } else {
            res.send({
                "status": false,
                "error": "id is required, which need to be numeric " + JSON.stringify(req.body) + "\t" + isNaN(req.body.id)
            });
        }

    }
    private listBlogsByTopic = async (req: Request, res: Response, next: NextFunction) => {
        console.log("listByTopic request arrived " + JSON.stringify(req.body));
        if (req.body.topic) {
            const data: any = await br.listByTopic(req.body.topic);
            let obj = {};
            obj['status'] = true;
            obj['data'] = data;
            res.send(obj);
        } else {
            res.send({"status": false, "error": "topic is required"});
        }
    }
    private updateBlogById = async (req: Request, res: Response, next: NextFunction) => {
        console.log("updateBlogById request arrived " + JSON.stringify(req.body));
        if (req.body.id && req.body.blog) {
            if (isObject(req.body.blog)) {
                const response: boolean = await br.updateBlogById(req.body.id, req.body.blog);
                res.send({"status": response});
            } else {
                res.send({"status": false, "error": "Invalid blog object to update"});
            }
        } else {
            res.send({"status": false, "error": "require id, blog Object to update"});
        }

    }
    private deleteBlogById = async (req: Request, res: Response, next: NextFunction) => {
        console.log("deleteBlogById request arrived " + JSON.stringify(req.body));
        if (req.body.id) {
            const response: boolean = await br.deleteBlogById(req.body.id);
            res.send({"status": response});

        } else {
            res.send({"status": false, "error": "require id, blog Object to update"});
        }
    }
}

export default BlogRouter;
