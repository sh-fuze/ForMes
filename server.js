const logger = require('@finelets/hyper-rest/app/Logger'),
    path = require('path'),
    restDir = path.join(__dirname, './server/rests'),
    graph = require('./server/Flow'),
	rests = require('@finelets/hyper-rest/rests')(restDir, graph);
    appBuilder = require('@finelets/hyper-rest/express/AppBuilder').begin(__dirname)

appBuilder
    .setWebRoot('/fuze/root', './client')
    .setFavicon('client/imgs/favicon.jpg')
    .setResources(...rests)
    .end();

let server = appBuilder.run(() => {
    const addr = server.address();
    logger.info('the server is running and listening at ' + addr.port);
});
