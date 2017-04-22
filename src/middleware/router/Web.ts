import * as express from "express";
import * as fs from "fs";

export class Web{
    private router: express.Router;

    constructor(BaseRouter: express.Router){
        this.router = BaseRouter;
    }

    private send(req: express.Request, res: express.Response){
        if(fs.existsSync('index.html')){
            res.status(200)
                .sendFile('index.html');
        }else{
            // We send an error page for UX friendly.
            res.status(404)
                .sendFile('error.html');
        }
    }

    initilize(): express.Router{
        this.router.use(express.static('public'));
        this.router.use(express.static('public/www'));

        this.router.get('/*', this.send);

        return this.router;
    }
}
