const CustomError = require('./custom-error');

module.exports = class NotFound extends CustomError {
    constructor(message, statusCode) {
        super(message);
        this.statusCode = statusCode;
    }
};
