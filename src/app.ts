import * as bodyParser from "body-parser";
import * as compression from "compression";
import * as cors from "cors";
import * as Debug from "debug";
import * as dotenv from "dotenv";
import * as express from "express";
import * as helmet from "helmet";
import * as morgan from "morgan";
import * as path from "path";
import { router } from "./middleware/router";

const debug = Debug("gateway");
const result = dotenv.config({path: path.resolve(process.cwd(), ".env")});

export const app = express();

app.use(express.static(path.join(__dirname, "../public")));

app.use(
    morgan("dev"),
    helmet.frameguard({
        action: "deny",
    }),
    helmet.xssFilter({
        setOnOldIE: false,
    }),
    helmet.hsts({
        includeSubdomains: true, // Must be enabled to be approved by Google
        maxAge: 10886400000, // Must be at least 18 weeks to be approved by Google
        preload: true,
    }),
    helmet.hidePoweredBy(),
    cors(),
    compression(),
    bodyParser.urlencoded({
        extended: false,
    }),
    bodyParser.json(),
    router,
);
