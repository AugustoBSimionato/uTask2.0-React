import React from 'react';
import Task from '../Task/Task';

import { useSelector } from 'react-redux';
import './TaskList.css';

function TaskList({ tasks, removeTask, moveTask, imageSrc }) {

  return (
    <ul className="main__tasks-list">
      {tasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          removeTask={removeTask}
          moveTask={moveTask}
          imageSrc={imageSrc}
        />
      ))}
    </ul>
  );
}

export default TaskList;