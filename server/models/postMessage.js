import mongoose from 'mongoose';

const postSchema = mongoose.Schema({
  task: String,
});

const postMessage = mongoose.model('PostMessage', postSchema);

export default PostMessage;