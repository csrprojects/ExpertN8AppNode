const { Router } = require('express');
const TagsController = require('../controller/Tags.Controller');

const tagsRouter = Router();
const tagsController = new TagsController();

tagsRouter.get('/', tagsController.index);

module.exports = tagsRouter;
