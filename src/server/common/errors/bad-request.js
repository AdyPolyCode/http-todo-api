const CustomError = require('./custom-error');

module.exports = class BadRequest extends CustomError {
    constructor(message, statusCode) {
        super(message);
        this.statusCode = statusCode;
    }
};
