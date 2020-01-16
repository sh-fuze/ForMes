const logger = require('@finelets/hyper-rest/app/Logger'),
    appBuilder = require('@finelets/hyper-rest/express/AppBuilder').begin(__dirname)

appBuilder
    .setWebRoot('/fuze/root', './client')
    .setFavicon('client/imgs/favicon.jpg')
    .end();

let server = appBuilder.run(() => {
    const addr = server.address();
    logger.info('the server is running and listening at ' + addr.port);
});
