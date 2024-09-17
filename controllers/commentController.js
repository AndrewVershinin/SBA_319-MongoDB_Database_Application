import Comment from '../models/comments.js';

// Create new comment
const createComment = async (req, res) => {
    try {
        const { content, authorId, postId } = req.body;

        const newComment = new Comment({
            content,
            authorId,
            postId
        });

        const savedComment = await newComment.save();
        res.status(201).json(savedComment)
    } catch (e) {
        res.status(500).json(e)
    }
};

// get all comment to all posts
const getAllComments = async (req, res) => {
    try {
        const comments = await Comment.find().populate('authorId', 'username');
        res.status(200).json(comments)
    } catch (e) {
        res.status(500).json(e)
    }
};

// Get all comments by a specific author
const getCommentsByAuthor = async (req, res) => {
    try {
        const { authorId } = req.params;
        const commentsByAuthor = await Comment.find({ authorId });

        if (!commentsByAuthor.length) {
            return res.status(404).json({ message: "No comments found for this author" });
        }

        res.status(200).json(commentsByAuthor);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Get all comments for a specific post
const getCommentsForPost = async (req, res) => {
    try {
        const { postId } = req.params;
        const commentsForPost = await Comment.find({ postId });

        if (!commentsForPost.length) {
            return res.status(404).json({ message: "No comments found for this post" });
        }

        res.status(200).json(commentsForPost);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export default {createComment, getAllComments, getCommentsByAuthor, getCommentsForPost }