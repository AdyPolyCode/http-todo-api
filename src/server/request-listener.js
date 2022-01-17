const router = require('./routers/todo.router');

const UrlParser = require('./common/url-parser')
const BodyParser = require('./common/body-parser');
const headerAppender = require('./common/header-appender');

module.exports = async (request, response) => {
    try {
        const { url, method } = request;

        const parsedUrl = UrlParser.parse(url)

        const body = await BodyParser.parse(request)

        const payload = {};

        if (parsedUrl.path.id) {
            payload.id = parsedUrl.path.id;
        }

        if (body) {
            payload.body = body;
        }

        const func = router.use(method, url);

        const { type, length, data } = await func(payload);

        headerAppender(response, {
            type,
            length,
        });

        response.write(data);

        return response.end();
    } catch (error) {
        console.log(error)
        const { message, statusCode } = error;

        headerAppender(response, {
            type: 'error',
            length: message.length,
        });

        response.write(message);

        return response.end();
    }
};