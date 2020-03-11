import {Request, Response, NextFunction, Router} from 'express';
import br from "../repository/BlogRepository";
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

    private addBlogItem = async (req: Request, res: Response, next: NextFunction) => {
        console.log("add Blog Item request arrived "+req.body);
        await br.addBlogData(req.body);
        console.log("Blog data added")
      //  const data: any = await br.listAllBlogs();
        res.json(req.body);
    }
    private listAllBlogs = async (req: Request, res: Response, next: NextFunction) => {
        console.log("list Blogs request arrived "+req.body);
        const data: any = await br.listAllBlogs();
        console.log("list Blogs request arrived "+data);
        res.send(data);
    }
    private listBlogById = (req: Request, res: Response, next: NextFunction) => {
        res.send("hi id");
    }
    private listBlogsByTopic = (req: Request, res: Response, next: NextFunction) => {

    }
    private updateBlogById = (req: Request, res: Response, next: NextFunction) => {

    }
    private deleteBlogById = (req: Request, res: Response, next: NextFunction) => {

    }
}

export default BlogRouter;
