import express from 'express';
import postController from '../controllers/postController.js';

const router = express.Router();

router.post('/posts', postController.createPost); // Create a new post
router.get('/posts', postController.getAllPosts); // Get all posts
router.get('/posts/:id', postController.getPostById); // Get a post by ID
router.put('/posts/:id', postController.updatePost); // Update a post by ID
router.delete('/posts/:id', postController.deletePost); // Delete a post by ID

export default router;