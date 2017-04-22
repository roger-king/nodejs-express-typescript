import {Router} from "express";
import {Web} from "./Web";
import {Revision} from "../../modules";

export class IndexRouter{
    private router: Router;
    constructor(BaseRouter: Router){
        this.router = BaseRouter;
    }

    public boostrap(): Router{
        this.router.use('/', new Web(this.router).initilize());
        this.router.use('/api', new Revision(this.router).initialize());

        return this.router;
    }
}