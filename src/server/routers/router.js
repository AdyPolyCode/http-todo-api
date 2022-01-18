const { BadRequest } = require('../common/errors');

module.exports = class Router {
    static init() {
        if (!this.instace) {
            this.instace = new Router();
            this.instace.currentPath = null;
            this.instace.path = [];
        }
        return this.instace;
    }

    use(method, url) {
        let { path, id } = url;

        path = '/' + path;

        if (id) {
            path += '/:id';
        }

        const func = this.path.filter((obj) =>
            obj.path === path && obj.method === method ? obj : undefined
        );

        if (!func.length) {
            throw new BadRequest('Wrong url or method', 400);
        }

        return func[0].controller;
    }

    route(path) {
        this.currentPath = path;

        return this;
    }

    get(...args) {
        args.forEach((func) => {
            this.path.push({
                path: this.currentPath,
                method: 'GET',
                controller: func,
            });
        });

        return this;
    }

    post(...args) {
        args.forEach((func) => {
            this.path.push({
                path: this.currentPath,
                method: 'POST',
                controller: func,
            });
        });

        return this;
    }

    put(...args) {
        args.forEach((func) => {
            this.path.push({
                path: this.currentPath,
                method: 'PUT',
                controller: func,
            });
        });

        return this;
    }

    delete(...args) {
        args.forEach((func) => {
            this.path.push({
                path: this.currentPath,
                method: 'DELETE',
                controller: func,
            });
        });

        return this;
    }
};
