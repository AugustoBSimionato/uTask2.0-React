import express from 'express';
import mongoose from 'mongoose';

import TaskMessage from '../models/taskMessage.js';

const router = express.Router();

export const getTasks = async (req, res) => {
  try {
    const taskMessages = await TaskMessage.find();

    res.status(200).json(taskMessages);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createTask = async (req, res) => {
  const { task, id, status } = req.body;

  const newTaskMessage = new TaskMessage({
    task,
    id,
    status
  });

  try {
    await newTaskMessage.save();

    res.status(201).json(newTaskMessage);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const updateTask = async (req, res) => {
  const { id } = req.params;
  const { task, status } = req.body;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No post with id: ${id}`);

  const updatedTask = { task, status, _id: id };

  await TaskMessage.findByIdAndUpdate(id, updatedTask, { new: true });

  res.json(updatedTask);
};

export const deleteTask = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No post with id: ${id}`);

  await TaskMessage.findByIdAndRemove(id);

  res.json({ message: 'Task deleted!' });
};

export default router;
