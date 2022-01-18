const router = require('./routers/todo.router');

const UrlParser = require('./common/url-parser');
const BodyParser = require('./common/body-parser');
const ErrorParser = require('./common/error-parser');
const HeaderAppender = require('./common/header-appender');

class RequestListener {
    #urlParser;
    #bodyParser;
    #headerAppender;
    #errorParser;

    constructor(urlParser, bodyParser, errorParser, headerAppender) {
        this.#urlParser = urlParser;
        this.#bodyParser = bodyParser;
        this.#headerAppender = headerAppender;
        this.#errorParser = errorParser;
    }

    listen() {
        return async (request, response) => {
            try {
                const { url, method } = request;

                const parsedUrl = this.#urlParser.parse(url);

                const body = await this.#bodyParser.parse(request);

                const payload = {};

                if (parsedUrl.path.id) {
                    payload.id = parsedUrl.path.id;
                }

                if (body) {
                    payload.body = body;
                }

                const func = router.use(method, parsedUrl.path);

                const { type, length, data } = await func(payload);

                this.#headerAppender(
                    response,
                    {
                        headerType: type,
                        length,
                    },
                    200
                );

                response.write(data);

                return response.end();
            } catch (error) {
                const { message, statusCode } = this.#errorParser.parse(error);

                this.#headerAppender(
                    response,
                    {
                        headerType: 'error',
                        length: message.length,
                    },
                    statusCode
                );

                response.write(message);

                return response.end();
            }
        };
    }
}

module.exports = new RequestListener(
    UrlParser,
    BodyParser,
    ErrorParser,
    HeaderAppender
);
