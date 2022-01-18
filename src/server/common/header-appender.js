const headerOptions = {
    error: {
        'content-type': 'application/json',
        'content-length': null,
        'access-control-allow-origin': '*',
        'access-control-allow-methods': ['GET', 'POST', 'PUT', 'DELETE'],
    },
    success: {
        'content-type': 'application/json',
        'content-length': null,
        'access-control-allow-origin': '*',
        'access-control-allow-methods': ['GET', 'POST', 'PUT', 'DELETE'],
    },
};

module.exports = (response, options, code) => {
    const { headerType, length } = options;

    const header = headerOptions[headerType];

    header['content-length'] = length;

    response.writeHead(code, header);
};
