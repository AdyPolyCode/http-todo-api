const Todo = require('../models/Todo');
const { NotFound } = require('../common/errors');

module.exports = class TodoService {
    constructor() {}

    async findOne(id) {
        const todo = await Todo.findByPk(id);

        if (!todo) {
            throw new NotFound('Todo with id ' + id + ' was not found', 404);
        }

        return todo;
    }

    async findMany() {
        const todos = await Todo.findAll({});

        return todos;
    }

    async createOne(name, content) {
        const todo = await Todo.create({ name, content });

        return todo;
    }

    async updateOne(id, name, content) {
        let todo = await Todo.findByPk(id);

        if (!todo) {
            throw new NotFound('Todo with id ' + id + ' was not found', 404);
        }

        await todo.update({ name, content });

        return todo;
    }

    async deleteOne(id) {
        const todo = await Todo.findByPk(id);

        if (!todo) {
            throw new NotFound('Todo with id ' + id + ' was not found', 404);
        }

        await todo.destroy();

        return todo;
    }
};
