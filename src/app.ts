import * as bodyParser from 'body-parser';
import * as compression from 'compression';
import * as cors from 'cors';
import * as dotenv from 'dotenv';
import * as express from 'express';
import * as helmet from 'helmet';
import { Container } from 'inversify';
import { InversifyExpressServer } from 'inversify-express-utils';
import * as morgan from 'morgan';
import * as path from 'path';
import { bindings } from './inversify.config';
import { config } from './utilities';

dotenv.config({ path: path.resolve(process.cwd(), '.env') });

export const bootstrapApplication = async (): Promise<express.Application> => {
    const container = new Container();
    await container.loadAsync(bindings);
    const app = new InversifyExpressServer(container);

    app.setConfig(middleware => {
        middleware.set('port', config.PORT);

        middleware.use(express.static(path.join(__dirname, '../public')));

        middleware.use(
            morgan('dev'),
            helmet.frameguard({
                action: 'deny',
            }),
            helmet.xssFilter({
                setOnOldIE: false,
            }),
            helmet.hsts({
                includeSubdomains: true, // Must be enabled to be approved by Google
                maxAge: 10886400000, // Must be at least 18 weeks to be approved by Google
                preload: true,
            }),
            helmet.hidePoweredBy(),
            cors(),
            compression(),
            bodyParser.urlencoded({
                extended: false,
            }),
            bodyParser.json(),
        );
    });

    return app.build();
};
