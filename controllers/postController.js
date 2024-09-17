import Post from '../models/posts.js'
import User from '../models/users.js'

// Create new post
const createPost = async (req, res) => {
    try {
        const { title, content, authorId } = req.body;

        const newPost = new Post({
            title,
            content,
            authorId
        });

        const savedPost = await newPost.save();
        res.status(201).json(savedPost)
    } catch (e) {
        res.status(400).json(e)
    }
};

// Get all posts
const getAllPosts = async (req, res) => {
    try {
        const posts = await Post.find();
        res.status(200).json(posts);
    } catch (e) {
        res.status(500).json(e)
    }
};

// Get a single post by ID
const getPostById = async (req, res) => {
    try {
      const post = await Post.findById(req.params.id)
      
      if (!post) {
        return res.status(404).json({ message: 'Post not found' });
      }
      
      res.status(200).json(post);
    } catch (error) {
      res.status(500).json(e);
    }
  };

// Update a post by ID
const updatePost = async (req, res) => {
    try {
      const { title, content, authorId } = req.body;
  
      const updatedPost = await Post.findByIdAndUpdate(
        req.params.id,
        { title, content, authorId },
        { new: true } // Return the updated post
      );
  
      if (!updatedPost) {
        return res.status(404).json({ message: 'Post not found' });
      }
  
      res.status(200).json(updatedPost);
    } catch (error) {
      res.status(400).json(e);
    }
  };
  
// Delete a post by ID
const deletePost = async (req, res) => {
    try {
      const deletedPost = await Post.findByIdAndDelete(req.params.id);
  
      if (!deletedPost) {
        return res.status(404).json({ message: 'Post not found' });
      }
  
      res.status(200).json({ message: 'Post deleted successfully' });
    } catch (error) {
      res.status(500).json(e);
    }
  };

export default { createPost, getAllPosts, getPostById, updatePost, deletePost }