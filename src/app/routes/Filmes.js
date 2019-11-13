const router = require("express").Router();
const controller = require("../controllers/FilmesController");

router.get("", controller.index);
router.get("/:id", controller.find);
router.post("", controller.store);
router.put("/:id", controller.update);
router.delete("/:id", controller.destroy);

module.exports = app => app.use("/filmes", router);
