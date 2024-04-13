const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const authMiddleware = require('../middleware/authMiddleware');

// Get all users
router.get('/', authMiddleware.authenticateUser, userController.getAllUsers);

// Get a specific user by ID
router.get('/:id', authMiddleware.authenticateUser, userController.getUserById);

// Create a new user
router.post('/', userController.createUser);

// Update an existing user by ID
router.put('/:id', authMiddleware.authenticateUser, userController.updateUser);

// Delete a user by ID
router.delete('/:id', authMiddleware.authenticateUser, userController.deleteUser);

module.exports = router;
