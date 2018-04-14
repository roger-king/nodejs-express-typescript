import { config } from './../../utilities/config';

export class Revision {
    private revision: string;

    constructor() {
        this.revision = String(config.VERSION);
    }

    public get() {
        return this.revision;
    }
}
