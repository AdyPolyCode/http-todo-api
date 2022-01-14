const NodeServer = require('./server/server');
const requestListener = require('./server/request-listener');
const Config = require('./config/config-loader');

const connectDB = require('./server/db/connect');

async function start() {
    await connectDB();

    const server = new NodeServer(requestListener, Config);

    server.start();
}

start();
