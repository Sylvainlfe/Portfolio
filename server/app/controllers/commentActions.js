// Import access to database tables
const tables = require("../../database/tables");

const browse = async (req, res, next) => {
  try {
    const comment = await tables.comment.readAll();
    res.json(comment);
  } catch (err) {
    next(err);
  }
};

const read = async (req, res, next) => {
  try {
    const comment = await tables.comment.read(req.params.id);
    if (comment == null) {
      res.sendStatus(404);
    } else {
      res.json(comment);
    }
  } catch (err) {
    next(err);
  }
};

const edit = async (req, res, next) => {
  try {
    const { text } = req.body;
    const { id } = req.params;
    const result = await tables.comment.update(id, { text });
    res.status(200).json(result);
  } catch (err) {
    next(err);
  }
};


const add = async (req, res, next) => {
  try {
    const {text , userId} = req.body
    const {id : projectId} = req.params
    const result = await tables.comment.create({text, userId, projectId})
    res.status(201).json(result);
  } catch (err) {
    next(err);
  }
};

const destroy = async (req, res, next) => {
  try {
    const {id} = req.params
    await tables.comment.delete(id);
    res.sendStatus(204);
  } catch (err) {
    next(err);
  }
};

module.exports = {
  browse,
  read,
  edit,
  add,
  destroy,
};
