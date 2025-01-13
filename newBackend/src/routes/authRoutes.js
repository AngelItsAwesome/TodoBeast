const todoController = require('../controllers/UserController')
const express = require('express');
const router = express.Router();

//Routes
router.post('/register', todoController.registerUser);

module.exports = router; // Export the router directly
