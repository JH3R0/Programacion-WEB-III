// Importar el módulo mysql2 con soporte para promesas
const mysql = require('mysql2/promise');

async function connectWithPromises() {
    // Configuración de la conexión
    const connection = await mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'prueba_conexion'
    });

    console.time('Conexión con promesas');

    try {
        // Ejecutar una consulta simple
        const [rows] = await connection.execute('SELECT * FROM productos');
        console.log('Resultados:', rows);
    } catch (err) {
        console.error('Error en la consulta:', err);
    } finally {
        // Cerrar la conexión
        await connection.end();
        console.timeEnd('Conexión con promesas'); // Finalizar medición de tiempo
    }
}

// Llamar a la función
connectWithPromises();