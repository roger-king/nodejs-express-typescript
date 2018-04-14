import { NextFunction, Request, Response, Router } from 'express';

export abstract class ApiRoute {
    public router: Router;

    constructor(BaseRouter: Router) {
        // Setup Express Router;
        this.router = BaseRouter;
        this.initialize();
    }

    public initialize(): Router {
        return this.router;
    }
}
