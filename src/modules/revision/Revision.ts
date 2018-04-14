import * as Debug from 'debug';
import { config } from './../../utilities/config';
const debug = Debug('Revision-Model:');

export class Revision {
    private revision: string;

    constructor() {
        debug('Initializing...');
        this.revision = String(config.VERSION);
    }

    public get() {
        debug('Set Revision', this.revision);
        return this.revision;
    }
}
