import * as path from 'path';
import { logger } from './logger';

const publicPath = (): string => {
    return path.join(__dirname, '../../public/');
};

export const webAppPath = () => {
    return path.join(publicPath(), 'www/');
};
