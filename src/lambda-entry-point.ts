import { Server } from "http";
import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { Context } from "aws-lambda";
import * as serverlessExpress from 'aws-serverless-express';
import * as express from 'express';
import {ExpressAdapter} from '@nestjs/platform-express';

let lambdaProxy: Server;

async function bootstrap() {
    const expressServer = express();
    const nestApp = await NestFactory.create(AppModule, new ExpressAdapter(expressServer));
    await nestApp.init();

    return serverlessExpress.createServer(expressServer);
}

export const handler = (event: any, context: Context) => {

    if (!lambdaProxy) {
        bootstrap().then((server) => {
            lambdaProxy = server;
            serverlessExpress.proxy(lambdaProxy, event, context);
        });
    } else {
        serverlessExpress.proxy(lambdaProxy, event, context);
    }
}