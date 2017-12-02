import { NestFactory } from '@nestjs/core';
import { ApplicationModule } from './modules/app.module';
import * as config from 'config';

const port: number = Number(config.get('port'));

async function bootstrap() {
    const app = await NestFactory.create(ApplicationModule);
    await app.listen(port);
}

bootstrap();
