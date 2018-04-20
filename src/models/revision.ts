import { config } from './../utilities';

export interface IRevision {
    version: string;
    status: string;
}

export class Revision implements IRevision {
    version: string = config.VERSION;
    status: string = 'OK';

    public toJson(): IRevision {
        return { version: this.version, status: this.status };
    }
}
