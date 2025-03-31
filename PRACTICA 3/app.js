// Importaciones
const express = require('express');
const path = require('path');

// Inicializar Express
const app = express();

// Configuración
app.use(express.urlencoded({ extended: true })); // Para parsear formularios
app.use(express.static(path.join(__dirname, 'public'))); // Archivos estáticos (CSS)
app.set('view engine', 'ejs'); // Motor de plantillas EJS

// Rutas
const taskRoutes = require('./routes/tasks');
app.use('/', taskRoutes);

// Manejo de errores (middleware)
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('¡Algo salió mal!');
});

// Iniciar servidor
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`✅ Servidor corriendo en http://localhost:${PORT}`);
});