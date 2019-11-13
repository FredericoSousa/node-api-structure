const Filme = require("../models/Filme");

const index = async (req, res) => {
  try {
    const filtros = req.query;
    if (filtros.titulo) filtros.titulo = { [Op.like]: `%${filtros.titulo}%` };
    const filmes = await Filme.findAll({ where: filtros });
    return res.json(filmes);
  } catch (error) {
    if (error) return res.status(500).send({ error: error.message });
  }
};
const find = async (req, res) => {
  const id = req.params.id;
  const filme = await Filme.findByPk(id);
  if (!filme) return res.sendStatus(204);
  return res.json(filme);
};
const store = async (req, res) => {
  const body = req.body;
  const filme = await Filme.create(body);
  return res.status(201).send(filme);
};
const update = async (req, res) => {
  const id = req.params.id;
  const body = req.body;
  const filme = await Filme.findByPk(id);
  if (!filme)
    return res.status(404).send({ msg: `O filme de id ${id} não existe.` });
  filme.update(body);
  return res.json(filme);
};
const destroy = async (req, res) => {
  const id = req.params.id;
  // const rows = await Filme.destroy({ where: { id } });
  const filme = await Filme.findByPk(id);

  if (filme) {
    filme.titulo = filme.titulo + " DELETADO";
    filme.save();
    return res.json({ msg: `Filme de id ${id} deletado com sucesso` });
  }
  return res.status(404).send({ msg: `O filme de id ${id} não existe.` });
};

module.exports = {
  index,
  find,
  update,
  destroy,
  store
};
