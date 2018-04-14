import { Router } from 'express';
import { RevisionApi } from './../../modules';
import { config } from './../../utilities/config';
import { asyncMiddleware } from './../asyncMiddleware';
import { Web } from './Web';

export const router: Router = Router();

router.use('/healthCheck', (req: IRequest, res: IResponse) => {
    res.status(200).send({ version: config.VERSION, status: 'OK' });
});

router.use('/api', new RevisionApi(this.router).initialize());

router.use('/', new Web(this.router).initilize());
