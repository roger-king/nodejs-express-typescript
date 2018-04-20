import { controller, httpGet, httpPost, requestBody } from 'inversify-express-utils';
import { config } from './../utilities';

@controller('/api/v1')
export class RevisionController {
    @httpGet('/')
    public async get() {
        return { version: config.VERSION, status: 'OK' };
    }
}
