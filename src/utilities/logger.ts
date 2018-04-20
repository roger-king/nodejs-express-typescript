import * as fs from 'fs';
import * as path from 'path';
import { Stream } from 'stream';
import { FileTransportOptions, Logger, LoggerInstance, LoggerOptions, stream, transports } from 'winston';
import { config } from './config';

const logLevel = config.LOG_LEVEL;
const appRoot = path.join(__dirname, '../../');
const logDir = path.join(appRoot, 'logs');
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

if (!fs.existsSync(logDir)) {
    fs.mkdirSync(logDir);
}

export const logger: LoggerInstance = new Logger({
    transports: [new transports.File(logOptions.file), new transports.Console(logOptions.console)],
    exitOnError: false,
});
