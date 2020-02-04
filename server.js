const logger = require('@finelets/hyper-rest/app/Logger'),
    path = require('path'),
    restDir = path.join(__dirname, './server/rests'),
    graph = require('./server/Flow'),
    rests = require('@finelets/hyper-rest/rests')(restDir, graph);
    connectDb = require('@finelets/hyper-rest/db/mongoDb/ConnectMongoDb'),
    appBuilder = require('@finelets/hyper-rest/express/AppBuilder').begin(__dirname)

appBuilder
    .setWebRoot('/fuze/root', './client')
    .setFavicon('client/imgs/favicon.jpg')
    .setResources(...rests)
    .end();

    connectDb(() => {
        logger.info('db: ' + process.env.MONGODB);
        logger.info('connect mongodb success .......');
        const server = appBuilder.run(() => {
            const addr = server.address();
            logger.info('the server is running and listening at ' + addr.port);
        });
    });

