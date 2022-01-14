module.exports = (request) => {
    return new Promise((resolve, reject) => {
        request.setEncoding('utf8');

        let body = '';

        request
            .on('data', (chunk) => {
                body += chunk;
            })
            .on('end', () => {
                body = JSON.parse(body);

                resolve(body);
            });
    });
};
