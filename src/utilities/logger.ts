import * as path from 'path';
import { FileTransportOptions, Logger, LoggerInstance, LoggerOptions, transports } from 'winston';
import { config } from './config';

const logLevel = config.LOG_LEVEL;
const appRoot = path.join(__dirname, '../../');
const logOptions = {
    file: {
        level: logLevel,
        filename: `${appRoot}/logs/app.log`,
        handleExceptions: true,
        json: true,
        maxsize: 5242880, // 5MB
        maxFiles: 5,
        colorize: false,
    },
    console: {
        level: 'debug',
        handleExceptions: true,
        json: false,
        colorize: true,
    },
};

export const logger: LoggerInstance = new Logger({
    transports: [new transports.File(logOptions.file), new transports.Console(logOptions.console)],
    exitOnError: false,
});
