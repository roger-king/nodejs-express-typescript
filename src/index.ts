import * as Debug from "debug";
import * as express from "express";
import * as helmet from "helmet";
import * as cors from "cors";
import * as morgan from "morgan";
import * as config from "config";
import * as compression from "compression";
import * as bodyParser from "body-parser";
import * as path from 'path';
import {IndexRouter} from "./middleware/router";
const debug = Debug('Server:');

class Server {
    public app: express.Application;
    private port: number;

    constructor(){
        debug("Initializing...");
        this.app = express();
        
        this.config();
        this.middleware();
        this.router();
    }

    private middleware(): void {
        this.app.use(
            morgan('dev'),
            helmet.frameguard({
                action: 'deny'
            }),
            helmet.xssFilter({
                setOnOldIE: false
            }),
            helmet.hsts({
                maxAge: 10886400000, // Must be at least 18 weeks to be approved by Google
                includeSubdomains: true, // Must be enabled to be approved by Google
                preload: true
            }),
            helmet.hidePoweredBy(),
            cors(),
            compression(),
            bodyParser.urlencoded({
                extended: false
            }),
            bodyParser.json(),
            express.static(path.join(__dirname, 'public'))
        )
    }

    private config(): void{
        this.port = Number(config.get('port'));
    }

    private router(): void{
        debug('Initializing Router');
        let router: express.Router;
        router = express.Router();
        let Index = new IndexRouter(router).boostrap();
        this.app.use("/", Index);
    }

    public start(){
        this.app
            .listen(this.port)
            .on('listening', () => {
                console.log('Application started on localhost: ', this.port);
            });
    }

}

const server = new Server();
export default server.start();