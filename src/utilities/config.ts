import * as Debug from 'debug';
const debug = Debug('server: config');

const requiredEnvVars: string[] = ['VERSION', 'PORT'];

const isRequired = (variables: string[]): void => {
    const missingEnvVars: string[] = [];

    variables.forEach(variable => {
        if (!process.env[variable]) {
            missingEnvVars.push(variable);
        }
    });

    if (missingEnvVars.length) {
        debug(`The following environment variables are required: ${missingEnvVars.join(', ')}`);
        process.exit(1);
    }
};

const setupConfig = () => {
    const appConfig = {
        PORT: isLocal ? 4000 : process.env.PORT,
        VERSION: isLocal ? 'local' : process.env.VERSION,
    };

    requiredEnvVars.forEach(variable => {
        appConfig[variable] = !process.env[variable] ? appConfig[variable] : process.env[variable];
    });

    return appConfig;
};

export const isLocal: boolean = process.env.NODE_ENV !== 'production';
export const config = setupConfig();
