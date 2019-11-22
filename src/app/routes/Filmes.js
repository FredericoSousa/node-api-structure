const router = require('express').Router();
const controller = require('../controllers/FilmesController');
const { FilmeValidator } = require('../validators');
const { filmeSchema } = FilmeValidator;
const { validate } = require('../middlewares');

router.get('', controller.index);
router.get('/:id', controller.find);
router.post('', validate(filmeSchema), controller.store);
router.put('/:id', validate(filmeSchema), controller.update);
router.delete('/:id', controller.destroy);

module.exports = app => app.use('/filmes', router);
