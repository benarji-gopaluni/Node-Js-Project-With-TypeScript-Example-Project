import {Router, Request, Response, NextFunction} from 'express';

export class BaseRouter {
    private _router: Router;
    private path: string = '/';

    constructor() {
        this._router = Router();
        this.initRoutes();
    }


    get router(): Router{
        return this._router;
    }

    private initRoutes(): void {
        this._router.get(`${this.path}`, this.greetMessage);
    }

    private greetMessage = (req: Request, res: Response, next: NextFunction) => {
        res.json({"message": "Welcome To All", "timestamp": new Date()});
    }
}

export default BaseRouter;
