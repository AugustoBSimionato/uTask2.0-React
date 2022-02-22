import React from 'react';
import './Task.css';
import images from '../../constants/images';

function Task({ task, removeTask }) {
  function handleRemoveClick() {
    removeTask(task.id);
  }

  return (
    <li className="main__task">
      {task.task}
      <img src={images.minus} onClick={handleRemoveClick} alt="remove" />
      <img src={images.moveArrow} alt="move arrow" />
    </li>
  );
}

export default Task;
