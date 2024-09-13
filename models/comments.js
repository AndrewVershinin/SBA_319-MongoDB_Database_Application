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

const Comment = mongoose.model('Comment', commentSchema);

export default Comment;