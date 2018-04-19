import { AsyncContainerModule } from 'inversify';
import { TYPE } from './constants';

export const bindings = new AsyncContainerModule(async bind => {
    await require('./controllers/revision_controller');
});
