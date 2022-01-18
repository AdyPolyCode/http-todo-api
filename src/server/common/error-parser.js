const Parser = require('./parser');

const { BaseError } = require('sequelize');

class ErrorParser extends Parser {
    static create() {
        this.responseCodes = {
            NotFound: 404,
            BadRequest: 400,
            success: 200,
            ValidationError: 422,
            UniqueConstraintError: 400,
        };

        return new ErrorParser();
    }

    parse(error) {
        super.parse(error);

        console.log(error);
        const err = { ...error };
        err.message = JSON.stringify({ message: error.message });

        console.log(err);

        if (error instanceof BaseError) {
            err.message = error.message;
            err.statusCode = this.responseCodes[error.constructor.name];
        }

        return err;
    }
}

module.exports = ErrorParser.create();
