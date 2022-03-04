import React from 'react';
import Task from '../Task/Task';

import './TaskList.css';

function TaskList({ tasks, removeTask, moveTask, setId, imageSrc }) {
  return (
    <ul className="main__tasks-list">
      {tasks.map((task) => (
        <Task
          key={task._id}
          task={task}
          removeTask={removeTask}
          moveTask={moveTask}
          setId={setId}
          imageSrc={imageSrc}
        />
      ))}
    </ul>
  );
}

export default TaskList;