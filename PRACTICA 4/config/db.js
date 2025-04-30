const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '', // tu contraseña de MySQL si tienes
  database: 'p4_crud'
});

connection.connect((err) => {
  if (err) throw err;
  console.log('🔌 Conexión MySQL exitosa');
});

module.exports = connection;
