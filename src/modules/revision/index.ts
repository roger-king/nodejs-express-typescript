import * as Debug from 'debug';
import { NextFunction, Request, Response, Router } from 'express';
import { ApiRoute } from './../../middleware/router/ApiRoute';
import { Revision } from './Revision';
const debug = Debug('Revision-API:');

export class RevisionApi extends ApiRoute {
    constructor(BaseRouter: Router) {
        super(BaseRouter);
    }

    public initialize(): Router {
        this.router.get('/revision', this.get);

        return this.router;
    }

    private get(req: Request, res: Response, next: NextFunction) {
        const revision = new Revision();
        const v: string = revision.get();
        res.status(200).send({
            data: 'Currently running version: ' + v,
            status: 'Success',
        });
    }
}
