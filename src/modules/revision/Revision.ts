import * as Debug from "debug";
import * as config from "config";
const debug = Debug("Revision-Model:");

export class Revision {
    private revision: string;

    constructor(){
        debug('Initializing...');
        this.revision = String(config.get('revision'));
    }

    public get(){
        debug('Set Revision', this.revision);
        return this.revision;
    }
}