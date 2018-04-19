import * as http from 'http';
import * as https from 'https';
import 'reflect-metadata';
import { expressApplication } from './app';
import { config, isLocal } from './utilities/config';
import { logger } from './utilities/logger';

const port = config.PORT;
// option for https server
let server: https.Server | http.Server;

server = http.createServer(expressApplication);

server.listen(port);
server.on('error', onError);
server.on('listening', () => {
    const msg = `Application is now running on http://localhost:${port}`;

    if (!isLocal) {
        // tslint:disable-next-line
        console.log(msg);
    }

    logger('server').debug(msg);
});

/**
 * Event listener for HTTP server "error" event.
 */

function onError(error: NodeJS.ErrnoException) {
    if (error.syscall !== 'listen') {
        throw error;
    }
    const bind = 'Port ' + port;

    // handle specific listen errors with friendly messages
    switch (error.code) {
        case 'EACCES':
            logger().error(bind + ' requires elevated privileges');
            process.exit(1);
            break;
        case 'EADDRINUSE':
            logger().error(bind + ' is already in use');
            process.exit(1);
            break;
        default:
            throw error;
    }
}

process.on('unhandledRejection', e => {
    if (e.fatal) {
        logger().error(e);
        process.exit(1);
    }
    // Todo: Look back into how/why this is being unhandled.
    if (e.statusCode !== 304) {
        logger('server').debug('!!UNHANDLED:');
        logger().error(e);
    }
});
