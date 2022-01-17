const Controller = require('./controller');
const TodoService = require('../services/todo.service');
const forwarder = require('../common/helpers/param-forwarder');

class TodoController {
    constructor(service) {
        this.service = service;
    }

    findOne = async (payload) => {
        const { id } = payload;

        let todo = await this.service.findOne(id);

        todo = JSON.stringify(todos)

        return { type: 'success', length: todo.length, data: todo };
    };

    findMany = async (payload) => {
        let todos = await this.service.findMany();

        todos = JSON.stringify(todos)

        return { type: 'success', length: todos.length, data: todos };
    };

    createOne = async (payload) => {
        const { name, content } = payload;

        let todo = await this.service.createOne(name, content);

        todo = JSON.stringify(todos)

        return { type: 'success', length: todo.length, data: todo };
    };

    updateOne = async (payload) => {
        const { id, name, content } = payload;

        let todo = await this.service.updateOne(id, name, content);

        todo = JSON.stringify(todos)

        return { type: 'success', length: todo.length, data: todo };
    };

    deleteOne = async (payload) => {
        const { id } = payload;

        let todo = await this.service.deleteOne(id);

        todo = JSON.stringify(todos)

        return { type: 'success', length: todo.length, data: todo };
    };
}

module.exports = Controller.createController(TodoService, TodoController);
