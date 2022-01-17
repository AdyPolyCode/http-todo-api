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

        return todo;
    }

    async findMany() {
        const todos = await Todo.findAll({});

        return todos;
    }

    async createOne(name, content) {
        const todo = await Todo.create(body);

        return todo;
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

        return todo;
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

        return todo;
    }
};
