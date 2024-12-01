const { Router } = require('express');
const UsersController = require('../controller/Users.Controller');

const usersRouter = Router();
const usersController = new UsersController();

usersRouter.post('/', usersController.create);
usersRouter.put('/:id', usersController.update);
usersRouter.get('/:id', usersController.show);
usersRouter.get('/', usersController.index);
usersRouter.delete('/:id', usersController.delete);

module.exports = usersRouter;
