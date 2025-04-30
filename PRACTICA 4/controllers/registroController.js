const Registro = require('../models/Registro');

exports.getAll = (req, res) => {
  Registro.getAll((err, result) => {
    if (err) return res.status(500).send(err);
    res.json(result);
  });
};

exports.create = (req, res) => {
  Registro.create(req.body, (err, result) => {
    if (err) return res.status(500).send(err);
    res.json({ id: result.insertId, ...req.body });
  });
};

exports.update = (req, res) => {
  Registro.update(req.params.id, req.body, (err) => {
    if (err) return res.status(500).send(err);
    res.sendStatus(200);
  });
};

exports.delete = (req, res) => {
  Registro.delete(req.params.id, (err) => {
    if (err) return res.status(500).send(err);
    res.sendStatus(200);
  });
};
