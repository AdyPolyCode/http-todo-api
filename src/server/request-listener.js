const router = require('./routers/todo.router');
const pathParser = require('./common/path-parser');
const bodyParser = require('./common/body-parser');
const headerAppender = require('./common/header-appender');
const { CustomError } = require('./common/errors');

module.exports = async (request, response) => {
    try {
        const { url, method } = request;

        const payload = {};

        // TODO: fix url parsing
        const { basePath, id } = pathParser(url);

        const body = await bodyParser(request);

        if (id) {
            payload.id = id;
        }

        if (body) {
            payload.body = body;
        }

        const func = router.use(method, url);

        const data = func(payload);

        headerAppender(response, {
            type: 'success',
            length: data.length,
        });

        response.write('data');

        response.end();
    } catch (error) {
        const { message, statusCode } = error;

        headerAppender(response, {
            type: 'error',
            length: message.length,
        });

        response.write(message);

        response.end();
    }
};
