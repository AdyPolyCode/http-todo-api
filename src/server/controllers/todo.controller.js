const Controller = require('./controller');
const TodoService = require('../services/todo.service');
const forwarder = require('../common/helpers/param-forwarder');

class TodoController {
    constructor(service) {
        this.service = service;
    }

    async findOne(payload) {
        const { id } = payload;

        const todo = await this.service.findOne(id);

        return todo;
    }

    async findMany(payload) {
        const todo = await this.service.findMany();

        return todo;
    }

    async createOne(payload) {
        const { name, content } = payload;

        const todo = await this.service.createOne(name, content);

        return todo;
    }

    async updateOne(payload) {
        const { id, name, content } = payload;

        const todo = await this.service.updateOne(id, name, content);

        return todo;
    }

    async deleteOne(payload) {
        const { id } = payload;

        const todo = await this.service.deleteOne(id);

        return todo;
    }
}

module.exports = Controller.createController(TodoService, TodoController);
