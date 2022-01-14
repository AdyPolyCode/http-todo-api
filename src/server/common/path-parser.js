const { CustomError } = require('./errors');

module.exports = (path) => {
    const regex = RegExp('^(/todos)(/[0-9]+)?$');
    const matches = path.match(regex);

    if (!matches) {
        throw new CustomError('Not found', 404);
    }

    return {
        basePath: matches[1],
        id: matches[2] ? Number(matches[2].replace('/', '')) : undefined,
    };
};
