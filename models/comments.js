import mongoose from "mongoose";
import User from "./users.js";
import Post from "./posts.js";

const { Schema } = mongoose;

const commentSchema = new Schema({
    content: {
        type: String,
        required: true
      },
      authorId: {
        type: Schema.Types.ObjectId,
        ref: User, // Reference to the User model
        required: true
      },
      postId: {
        type: Schema.Types.ObjectId,
        ref: Post, // Reference to the Post model
        required: true
      }
});

// Single-field index on authorId to optimize queries by author
commentSchema.index({ authorId: 1 });

// Single-field index on postId to optimize queries by post
commentSchema.index({ postId: 1 });


const Comment = mongoose.model('Comment', commentSchema);

export default Comment;