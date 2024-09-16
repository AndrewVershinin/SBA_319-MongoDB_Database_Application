import express from 'express';
import userController from '../controllers/userController.js';

const router = express.Router();

router.post('/users', userController.createUser); // Create a new user
router.get('/users', userController.getAllusers); // Get all users
router.get('/users/:id', userController.getUserById); // Get a user by ID
router.put('/users/:id', userController.updateUser); // Update a user by ID
router.delete('/users/:id', userController.deleteUser); // Delete a user by ID

export default router;
