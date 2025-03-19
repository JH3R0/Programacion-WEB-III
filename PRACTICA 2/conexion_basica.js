// Importar el módulo mysql2
const mysql = require('mysql2');

// Configuración de la conexión
const connection = mysql.createConnection({
    host: 'localhost',      // Host de la base de datos
    user: 'root',           // Usuario de MySQL
    password: '',           // Contraseña de MySQL (vacía por defecto en XAMPP)
    database: 'prueba_conexion' // Nombre de la base de datos
});

// Medir el tiempo de ejecución
console.time('Conexión básica');

// Conectar a la base de datos
connection.connect((err) => {
    if (err) {
        console.error('Error al conectar:', err);
        return;
    }
    console.log('Conexión básica establecida');

    // Ejecutar una consulta simple
    connection.query('SELECT * FROM usuarios', (err, results) => {
        if (err) {
            console.error('Error en la consulta:', err);
            return;
        }
        console.log('Resultados:', results);

        // Cerrar la conexión
        connection.end();
        console.timeEnd('Conexión básica'); // Finalizar medición de tiempo
    });
});