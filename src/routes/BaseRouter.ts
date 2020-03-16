import {Router, Request, Response, NextFunction} from 'express';
import BlogRepository from "../repository/BlogRepository";
import BlogRouter from "./BlogRouter";

export class BaseRouter {
    private _router: Router;
    private path: string = '/';

    constructor() {
        this._router = Router();
        this.initRoutes();
    }


    get router(): Router {
        return this._router;
    }

    private initRoutes(): void {
        this._router.get(`${this.path}`, this.greetMessage);
    }

    private greetMessage = (req: Request, res: Response, next: NextFunction) => {
        let data = BlogRouter.getApiInfo();
        res.json({
            "message": "Welcome To All",
            "timestamp": new Date(),
            "Msg": "This is a localstorage based node js project to init with basic data call /blogs/init",
            "apis": data
        });
    }
}

export default BaseRouter;
