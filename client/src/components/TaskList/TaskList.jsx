import React from 'react';
import Task from '../Task/Task';
import './TaskList.css';

function TaskList({ tasks, removeTask, moveTask }) {
  return (
    <ul className="main__tasks-list">
      {tasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          removeTask={removeTask}
          moveTask={moveTask}
        />
      ))}
    </ul>
  );
}

export default TaskList;
