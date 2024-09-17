import express from 'express';
import commentController from '../controllers/commentController.js';

const router = express.Router();

router.post('/comments', commentController.createComment); // Create comment
router.get('/comments', commentController.getAllComments); // Get all comments
router.get('/comments/author/:authorId', commentController.getCommentsByAuthor); // Get all comments by author
router.get('/comments/post/:postId', commentController.getCommentsForPost);  // Get all comments for a post

export default router;