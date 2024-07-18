const tables = require("../../database/tables");

const browse = async (req, res, next) => {
  try {
    const project = await tables.project.readAll();

    res.json(project);
  } catch (err) {
    next(err);
  }
};

const read = async (req, res, next) => {
    try {
      const project = await tables.project.read(req.params.id);
      if (project == null) {
        res.sendStatus(404);
      } else {
        res.json(project);
      }
    } catch (err) {
      next(err);
    }
  };



module.exports = {
  browse,
  read,
};