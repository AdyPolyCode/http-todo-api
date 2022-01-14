const Controller = require('./controller');
const TodoService = require('../services/todo.service');
const forwarder = require('../common/helpers/param-forwarder');

class TodoController {
    constructor(service) {
        this.service = service;
    }

    findOne = async (payload) => {
        const { id } = payload;

        const todo = await this.service.findOne(id);

        return { type: 'success', length: todo.length, data: todo };
    };

    findMany = async (payload) => {
        const todos = await this.service.findMany();

        return { type: 'success', length: todos.length, data: todos };
    };

    createOne = async (payload) => {
        const { name, content } = payload;

        const todo = await this.service.createOne(name, content);

        return { type: 'success', length: todo.length, data: todo };
    };

    updateOne = async (payload) => {
        const { id, name, content } = payload;

        const todo = await this.service.updateOne(id, name, content);

        return { type: 'success', length: todo.length, data: todo };
    };

    deleteOne = async (payload) => {
        const { id } = payload;

        const todo = await this.service.deleteOne(id);

        return { type: 'success', length: todo.length, data: todo };
    };
}

module.exports = Controller.createController(TodoService, TodoController);
