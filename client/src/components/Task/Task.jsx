import React from 'react';
import './Task.css';
import images from '../../constants/images';

function Task({ task, removeTask, moveTask, setId, imageSrc }) {
  return (
    <li className="main__task" onMouseOver={() => { setId(task._id) }}>
      {task.task}
      <img src={images.minus} onClick={removeTask} alt="remove" />
      <img src={imageSrc} onClick={moveTask} alt="move arrow" />
    </li>
  );
}

export default Task;
