import { logger } from './logger';

interface IConfig {
    PORT: number;
    VERSION: string;
    LOG_LEVEL: string;
}

const requiredEnvVars: string[] = ['PORT'];
const missingEnvVars: string[] = [];

const isRequired = (configObj: any): void => {
    for (const key in configObj) {
        if (!configObj[key] && requiredEnvVars.indexOf(key) < 0) {
            missingEnvVars.push(key);
        }
    }
};

const getEnvVar = (localEnv, localEnvValue) => {
    if (isLocal && localEnvValue) {
        return localEnvValue;
    }
    return process.env[localEnv];
};

const setupConfig = (): IConfig => {
    const version = require('./../../package.json').version;

    const appConfig: IConfig = {
        PORT: getEnvVar('PORT', 4000),
        VERSION: isLocal ? 'local' : String(version),
        LOG_LEVEL: getEnvVar('LOG_LEVEL', 'debug'),
    };

    isRequired(appConfig);

    return appConfig;
};

export const isLocal: boolean = process.env.NODE_ENV !== 'production';
export const config: IConfig = setupConfig();

if (missingEnvVars.length) {
    logger.error(`The following environment variables are required: ${missingEnvVars.join(', ')}`);
    process.exit(1);
}
