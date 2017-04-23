import * as bodyParser from 'body-parser';
import * as compression from 'compression';
import * as config from 'config';
import * as cors from 'cors';
import * as Debug from 'debug';
import * as express from 'express';
import * as helmet from 'helmet';
import * as morgan from 'morgan';
import * as path from 'path';
import {Connection, createConnection} from 'mongoose';
import {IndexRouter} from './middleware/router';
const debug = Debug('Server:');

class Server {
    public app: express.Application;
    private port: number;

    constructor(){

        debug('Initializing...');
        this.app = express();
        this.config();
        this.middleware();
        this.router();
    }

    public start(){

        this.app
            .listen(this.port)
            .on('listening', () => {
                debug('Application started on localhost: ', this.port);
            });
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
                includeSubdomains: true, // Must be enabled to be approved by Google
                maxAge: 10886400000, // Must be at least 18 weeks to be approved by Google
                preload: true
            }),
            helmet.hidePoweredBy(),
            cors(),
            compression(),
            bodyParser.urlencoded({
                extended: false
            }),
            bodyParser.json()
        );
    }

    private config(): void{
        const MongoConnectionString: string = String(config.get('database.mongo.host'));
        this.port = Number(config.get('port'));

        const connection: Connection = createConnection(MongoConnectionString);
    }

    private router(): void{

        debug('Initializing Router');
        let router: express.Router;
        router = express.Router();
        const index = new IndexRouter(router).boostrap();
        this.app.use('/', index);
    }

}

const server = new Server();
export default server.start();
