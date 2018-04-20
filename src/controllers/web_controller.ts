import * as express from 'express';
import * as fs from 'fs';
import { controller, httpGet, requestBody, response } from 'inversify-express-utils';
import * as path from 'path';
import { logger, webAppPath } from './../utilities';

@controller('/')
export class WebController {
    @httpGet('/')
    public async get(@response() res: IResponse) {
        res.render('error');
    }
}
