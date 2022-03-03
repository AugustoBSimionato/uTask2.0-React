import mongoose from 'mongoose';

const postSchema = mongoose.Schema({
  task: String,
  id: String
});

var PostMessage = mongoose.model('PostMessage', postSchema);

export default PostMessage;
