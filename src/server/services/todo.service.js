const Todo = require('../models/Todo');
const { NotFound } = require('../common/errors');

module.exports = class TodoService {
    constructor() {}

    async findOne(id) {
        const todo = await Todo.findByPk(id);

        if (!todo) {
            const error = new NotFound(
                'Todo with id ' + id + ' was not found',
                404
            );

            return {
                error: {
                    message: error.message,
                    statusCode: error.statusCode,
                },
                data: null,
            };
        }

        return { error: null, data: todo };
    }

    async findMany() {
        const todos = await Todo.findAll();

        return { error: null, data: todos };
    }

    async createOne(name, content) {
        const todo = await Todo.create(body);

        return { error: null, data: todo };
    }

    async updateOne(id, name, content) {
        let todo = await Todo.findByPk(id);

        if (!todo) {
            const error = new NotFound(
                'Todo with id ' + id + ' was not found',
                404
            );

            return {
                error: {
                    message: error.message,
                    statusCode: error.statusCode,
                },
                data: null,
            };
        }

        todo = await todo.update(body);

        return { error: null, data: todo };
    }

    async deleteOne(id) {
        const todo = await Todo.findByPk(id);

        if (!todo) {
            const error = new NotFound(
                'Todo with id ' + id + ' was not found',
                404
            );

            return {
                error: {
                    message: error.message,
                    statusCode: error.statusCode,
                },
                data: null,
            };
        }

        await todo.destroy();

        return { error: null, data: todo };
    }
};
