import { NestFactory } from '@nestjs/core';
import { ApplicationModule } from './modules/app.module';
import * as config from 'config';
import * as morgan from 'morgan';
import * as bodyParser from 'body-parser';
import * as helmet from 'helmet';
import * as cors from 'cors';
import * as compression from 'compression';

const port: number = Number(config.get('port'));

async function bootstrap() {
    const app = await NestFactory.create(ApplicationModule);
    app.setGlobalPrefix('/api');
    app.use(
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
    await app.listen(port);
}

bootstrap();
