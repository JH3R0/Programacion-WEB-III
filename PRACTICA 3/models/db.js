const mysql = require('mysql2/promise');

// Configuración para XAMPP (valores por defecto)
const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',       // Usuario por defecto en XAMPP
  password: '',       // Contraseña vacía por defecto
  database: 'crud_mvc',
  waitForConnections: true,
  connectionLimit: 10
});

module.exports = pool;