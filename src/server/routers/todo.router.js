const Router = require('./router');
const todoController = require('../controllers/todo.controller');

const router = Router.init();

router
    .route('/todos')
    .get(todoController.findMany)
    .post(todoController.createOne);

router
    .route('/todos/:id')
    .get(todoController.findOne)
    .put(todoController.updateOne)
    .delete(todoController.deleteOne);

module.exports = router;
