import axios from 'axios';

const url = 'http://localhost:5000/tasks';

<<<<<<< HEAD
export const fetchTasks = () => axios.get(url);
export const createTask = (newTask) => axios.post(url, newTask);
export const updateTask = (id, updatedTask) =>
  axios.patch(`${url}/${id}`, updatedTask);
export const deleteTask = (id) => axios.delete(`${url}/${id}`);
=======
export const fetchPosts = () => axios.get(url);
export const createPost = (newPost) => axios.post(url, newPost);
export const deletePost = (id) => axios.delte(`${url}/${id}`);
>>>>>>> 76a363c3602fd98d2aca2e499cbbcc4c20487336
