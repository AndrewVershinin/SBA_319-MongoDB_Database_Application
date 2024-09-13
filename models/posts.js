import mongoose from "mongoose";
import User from "./users.js";

const { Schema } = mongoose;
const postSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    authorId: {
        type: Schema.Types.ObjectId, 
        ref: User, // Reference to the User model
        required: true
    }
});

const Post = mongoose.model('Post', postSchema);

export default Post;