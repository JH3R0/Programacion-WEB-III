const pool = require('../models/db');

// Obtener todas las tareas
exports.getAllTasks = async (req, res) => {
  try {
    const [tasks] = await pool.query('SELECT * FROM tasks ORDER BY created_at DESC');
    res.render('index', { tasks });
  } catch (error) {
    console.error('Error al obtener tareas:', error);
    res.status(500).send('Error interno del servidor');
  }
};

// Crear nueva tarea
exports.createTask = async (req, res) => {
  const { title, description } = req.body;
  try {
    await pool.query('INSERT INTO tasks (title, description) VALUES (?, ?)', [title, description]);
    res.redirect('/');
  } catch (error) {
    console.error('Error al crear tarea:', error);
    res.status(500).send('Error al guardar la tarea');
  }
};

// Formulario de edición
exports.renderEditForm = async (req, res) => {
  try {
    const [task] = await pool.query('SELECT * FROM tasks WHERE id = ?', [req.params.id]);
    if (!task[0]) return res.status(404).send('Tarea no encontrada');
    res.render('edit', { task: task[0] });
  } catch (error) {
    console.error('Error al cargar edición:', error);
    res.status(500).send('Error interno');
  }
};

// Actualizar tarea
exports.updateTask = async (req, res) => {
  const { id } = req.params;
  const { title, description } = req.body;
  try {
    await pool.query('UPDATE tasks SET title = ?, description = ? WHERE id = ?', [title, description, id]);
    res.redirect('/');
  } catch (error) {
    console.error('Error al actualizar:', error);
    res.status(500).send('Error al actualizar la tarea');
  }
};

// Eliminar tarea
exports.deleteTask = async (req, res) => {
  try {
    await pool.query('DELETE FROM tasks WHERE id = ?', [req.params.id]);
    res.redirect('/');
  } catch (error) {
    console.error('Error al eliminar:', error);
    res.status(500).send('Error al eliminar la tarea');
  }
};