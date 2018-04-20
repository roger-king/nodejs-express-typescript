import { injectable } from 'inversify';
import { IRevision, Revision } from './../models/revision';

@injectable()
export class RevisionRepository {
    private currentRevision: Revision = new Revision();

    public getRevision(): IRevision {
        return this.currentRevision.toJson();
    }
}
