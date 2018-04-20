import { logger } from './logger';

const requiredEnvVars: string[] = ['VERSION', 'PORT'];

const isRequired = (variables: string[]): void => {
    const missingEnvVars: string[] = [];

    variables.forEach(variable => {
        if (!process.env[variable]) {
            missingEnvVars.push(variable);
        }
    });

    if (missingEnvVars.length) {
        logger.error(`The following environment variables are required: ${missingEnvVars.join(', ')}`);
        process.exit(1);
    }
};

const setupConfig = () => {
    const appConfig = {
        PORT: isLocal ? 4000 : process.env.PORT,
        VERSION: isLocal ? 'local' : process.env.VERSION,
        LOG_LEVEL: isLocal ? 'debug' : process.env.LOG_LEVEL,
    };

    requiredEnvVars.forEach(variable => {
        appConfig[variable] = !process.env[variable] ? appConfig[variable] : process.env[variable];
    });

    return appConfig;
};

export const isLocal: boolean = process.env.NODE_ENV !== 'production';
export const config = setupConfig();
