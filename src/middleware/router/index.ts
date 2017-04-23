import {Router} from "express";
import {Web} from "./Web";
import {Revision, User} from "../../modules";

export class IndexRouter{
    private router: Router;
    constructor(BaseRouter: Router){
        this.router = BaseRouter;
    }

    public boostrap(): Router{
        this.router.use('/api', 
            new Revision(this.router).initialize(), 
            new User(this.router).initialize()
        );

        this.router.use('/', new Web(this.router).initilize());

        return this.router;
    }
}