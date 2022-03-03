import mongoose from 'mongoose';
import express from 'express';

import PostMessage from '../models/postMessage.js';

const router = express.Router();

export const getPosts = async (req, res) => {
  try {
    const postMessages = await PostMessage.find();

    res.status(200).json(postMessages);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createPost = async (req, res) => {
  const { task, id, status } = req.body;

  const newPostMessage = new PostMessage({
    task,
    id,
    status
  });

  try {
    await newPostMessage.save();

    res.status(201).json(newPostMessage);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const deletePost = async (req, res) => {
  const { id } = req.params;

  if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('Sem task com esse id');

  await PostMessage.findByIdAndRemove(id);

  res.json({ message: 'Task excluída com sucesso' });
}

export default router;
