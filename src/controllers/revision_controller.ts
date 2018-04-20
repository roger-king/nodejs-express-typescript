import { inject } from 'inversify';
import { controller, httpGet, httpPost, requestBody } from 'inversify-express-utils';
import { TYPE } from './../constants';
import { RevisionRepository } from './../repositories';
import { config } from './../utilities';

@controller('/api/healthCheck')
export class RevisionController {
    constructor(@inject(TYPE.RevisionRepository) private revisionRepository: RevisionRepository) {}

    @httpGet('/')
    public async get() {
        return this.revisionRepository.getRevision();
    }
}
