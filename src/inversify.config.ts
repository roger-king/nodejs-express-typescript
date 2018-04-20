import { AsyncContainerModule } from 'inversify';
import { TYPE } from './constants';
import { RevisionRepository } from './repositories';

export const bindings = new AsyncContainerModule(async bind => {
    await require('./controllers/revision_controller');
    await require('./controllers/web_controller');

    bind<RevisionRepository>(TYPE.RevisionRepository).to(RevisionRepository);
});
