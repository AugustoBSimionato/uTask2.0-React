import mongoose from 'mongoose';

const postSchema = mongoose.Schema({
  task: String,
  id: String,
  status: String
});

var TaskMessage = mongoose.model('TaskMessage', postSchema);

export default TaskMessage;
