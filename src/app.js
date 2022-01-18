const NodeServer = require('./server/server');
const RequestListener = require('./server/request-listener');
const Config = require('./config/config-loader');

const connectDB = require('./server/db/connect');

async function start() {
    await connectDB();

    const server = new NodeServer(RequestListener.listen(), Config);

    server.start();
}

start();
