import React from 'react';
import './Task.css';
import images from '../../constants/images';

function Task({ task, removeTask, moveTask }) {
  function RemoveFunction() {
    removeTask(task.id);
  }

  function MoveFunction() {
    moveTask(task.id);
  }

  return (
    <li className="main__task">
      {task.task}
      <img src={images.minus} onClick={RemoveFunction} alt="remove" />
      <img src={images.moveArrow} onClick={MoveFunction} alt="move arrow" />
    </li>
  );
}

export default Task;
