module.exports = (id, body) => {
    const options = {};

    if (id) {
        options.id = id;
    }

    if (body) {
        options.body = body;
    }

    return options;
};
