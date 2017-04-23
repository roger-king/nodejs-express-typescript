import * as Debug from 'debug';
import { Router, Request, Response, NextFunction } from 'express';
import { User } from './User';

const debug = Debug('User-API:');

export class API {
    private router: Router;
    
    constructor(BaseRouter: Router){
        this.router = BaseRouter;
    }

    private find(req: Request, res: Response, next: NextFunction): void{
        new User().find().then((response) => {
            res.status(200).send(response);
        });
    }

    public initialize(): Router{
        this.router.get('/user', this.find);

        return this.router
    }
}