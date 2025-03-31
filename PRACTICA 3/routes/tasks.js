const express = require('express');
const router = express.Router();
const taskController = require('../controllers/taskController');

// CRUD Routes
router.get('/', taskController.getAllTasks);
router.post('/tasks', taskController.createTask);
router.get('/tasks/edit/:id', taskController.renderEditForm);
router.post('/tasks/update/:id', taskController.updateTask);
router.get('/tasks/delete/:id', taskController.deleteTask);

module.exports = router;