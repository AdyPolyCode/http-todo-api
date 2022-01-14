const responseCodes = {
    error: 404,
    success: 200,
};

const headerOptions = {
    error: {
        'content-type': 'application/json',
        'content-length': 0,
    },
    success: {
        'content-type': 'application/json',
        'content-length': 0,
    },
};

module.exports = (response, options) => {
    const { type, length } = options;

    const code = responseCodes[type];
    const header = headerOptions[type];

    header['content-length'] = length;

    response.writeHead(code, header);

    return;
};
