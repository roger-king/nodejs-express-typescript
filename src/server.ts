import { app } from './app';
import { config } from "./utilities/config";

const port = config.PORT;

app.listen(port);
app.on('error', onError);
app.on('listening', () => {
    // tslint:disable-next-line
    console.log(`Application is now running on http://localhost:${port}`);
})

/**
 * Event listener for HTTP server "error" event.
 */

function onError(error: NodeJS.ErrnoException) {
    if (error.syscall !== "listen") {
        throw error;
    }
    const bind = "Port " + port;

    // handle specific listen errors with friendly messages
    switch (error.code) {
        case "EACCES":
            // tslint:disable-next-line
            console.error(bind + " requires elevated privileges");
            process.exit(1);
            break;
        case "EADDRINUSE":
            // tslint:disable-next-line
            console.error(bind + " is already in use");
            process.exit(1);
            break;
        default:
            throw error;
    }
}

process.on("unhandledRejection", (e) => {
    if (e.fatal) {
        // tslint:disable-next-line
        console.error(e);
        process.exit(1);
    }
    // Todo: Look back into how/why this is being unhandled.
    if (e.statusCode !== 304) {
        // tslint:disable-next-line
        console.log("!!UNHANDLED:");
        // tslint:disable-next-line
        console.error(e);
    }
});
