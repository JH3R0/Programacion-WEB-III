// Importar el módulo mysql2
const mysql = require('mysql2');

// Configuración del pool
const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'prueba_conexion',
    waitForConnections: true,  // Esperar si no hay conexiones disponibles
    connectionLimit: 10,       // Límite de conexiones en el pool
    queueLimit: 0              // Límite de solicitudes en cola (0 = sin límite)
});

console.time('Conexión con Pooling');

// Obtener una conexión del pool
pool.getConnection((err, connection) => {
    if (err) {
        console.error('Error al obtener conexión:', err);
        return;
    }

    // Ejecutar una consulta simple
    connection.query('SELECT * FROM pedidos', (err, results) => {
        connection.release(); // Liberar la conexión para que pueda ser reutilizada

        if (err) {
            console.error('Error en la consulta:', err);
            return;
        }
        console.log('Resultados:', results);

        console.timeEnd('Conexión con Pooling'); // Finalizar medición de tiempo
    });
});