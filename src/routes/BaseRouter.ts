import {Router, Request, Response, NextFunction} from 'express';
import Utils from "../utils/Utils";

let jwt = require('jsonwebtoken');

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
        this._router.post(`/login`, this.login);
    }

    private greetMessage = (req: Request, res: Response, next: NextFunction) => {
        res.json({"message": "Welcome To All", "timestamp": new Date()});
    }
    private login = (req: Request, res: Response, next: NextFunction) => {
        if (req.body.username == 'test' && req.body.password == 'password') {
            let token = jwt.sign({'username': req.body.username}, Utils.secret_key,
                {
                    'expiresIn': '24h'//h-hours,m-min,s-secs
                }
            );
            res.json({'success': true, 'message': 'Authentication Successfull', 'token': token});
        } else {
            res.json({'success': false, 'message': 'Authentication Failed', 'token': null});
        }
    }
}

export default BaseRouter;
