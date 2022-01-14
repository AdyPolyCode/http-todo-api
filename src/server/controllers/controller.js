module.exports = class Controller {
    static createController(service, controller) {
        const s = new service();

        return new controller(s);
    }
};
