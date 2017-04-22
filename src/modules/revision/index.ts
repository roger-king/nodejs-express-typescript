import {Router, Request, Response, NextFunction } from 'express';
import * as config from 'config';
import * as Debug from 'debug';
import { Revision } from './Revision';
const debug = Debug('Revision-API:');

export class API {
    public router: Router;

    constructor(BaseRouter: Router){
        debug('Initializing...');
        // Setup Express Router;
        this.router = BaseRouter;
        this.initialize();
    }

    private get(req: Request, res: Response, next: NextFunction){
        let revision = new Revision();
        const v: string = revision.get();
        res.status(200)
            .send({
                status: 'Success', 
                data: 'Currently running version: ' + v
            });
    }

    initialize(): Router{
        this.router.get('/', this.get);

        return this.router;
    }
}