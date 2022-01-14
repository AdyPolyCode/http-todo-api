const { Server } = require('http');

module.exports = class NodeServer extends Server {
    constructor(requestListener, config) {
        super(requestListener);
        this.config = new config();
    }

    start() {
        const port = this.config.getValue('NODE_PORT');

        return this.listen(port, () => {
            console.log('Server is listening at port: ' + port);
        });
    }
};
