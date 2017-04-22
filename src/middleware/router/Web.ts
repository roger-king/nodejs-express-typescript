import * as Debug from "debug";
import * as express from "express";
import * as fs from "fs";
import * as path from "path";
const debug = Debug("Web-Router:");

export class Web{
    private router: express.Router;

    constructor(BaseRouter: express.Router){
        this.router = BaseRouter;
    }

    private send(req: express.Request, res: express.Response){
        debug('Path', path.resolve(__dirname));
        if(fs.existsSync('index.html')){
            res.status(200)
                .sendfile('index.html', {"root": "./public/www/"});
        }else{
            // We send an error page for UX friendly.
            res.status(404)
                .sendFile("error.html", {"root": "./public/www/"});
        }
    }

    initilize(): express.Router{
        this.router.use(express.static('public'));

        this.router.get('/*', this.send);

        return this.router;
    }
}
