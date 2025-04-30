const db = require('../config/db');

const Registro = {
  getAll: (callback) => {
    db.query('SELECT * FROM registros', callback);
  },
  create: (data, callback) => {
    db.query('INSERT INTO registros SET ?', data, callback);
  },
  update: (id, data, callback) => {
    db.query('UPDATE registros SET ? WHERE id = ?', [data, id], callback);
  },
  delete: (id, callback) => {
    db.query('DELETE FROM registros WHERE id = ?', [id], callback);
  }
};

module.exports = Registro;
