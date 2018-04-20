import * as fs from 'fs';
import { controller, httpGet, requestBody, response } from 'inversify-express-utils';
import * as path from 'path';
import { logger, webAppPath } from './../utilities';

@controller('/')
export class WebController {
    @httpGet('/')
    public async get(@response() res: IResponse) {
        if (fs.existsSync('index.html')) {
            // res.status(200).sendFile('index.html', { root: webAppPath() });
        } else {
            // We send an error page for UX friendly.
            // res.status(404).sendFile('error.html', { root: webAppPath() });
            logger('web').debug('Sending error');
            res.status(400).sendFile('error.html', { root: webAppPath() });
        }
    }
}
