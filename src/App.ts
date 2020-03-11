import * as express from 'express';
import * as bodyparser from 'body-parser';
import BaseRouter from "./routes/BaseRouter";
import BlogRouter from "./routes/BlogRouter";
class App{
    public express;
    constructor(){
        this.express = express();
        this.initRouters();
    }
    private initRouters() : void{
        this.express.use(bodyparser.json());
        this.express.use('/',new BaseRouter().router);
        this.express.use('/',new BlogRouter().router);

    }
}
export default new App().express;
