import React, { useState } from 'react';
import { Navbar, AddForm, TaskList } from './components';
import images from './constants/images';

import './App.css';

function App() {
  const [tasks, setTask] = useState([]);

  function addTask(task) {
    setTask([...tasks, { ...task, status: 'todo' }]);
  }

  function removeTask(id) {
    setTask(tasks.filter((task) => task.id !== id));
  }

  function moveTask(id) {
    const task = tasks.find(task => task.id === id);

    if (task.status === 'todo')
      task.status = 'doing';
    else if (task.status === 'doing')
      task.status = 'done';
    else
      task.status = 'todo';

    setTask((tasks) => [...tasks.filter((task) => task.id !== id), task]);
  }

  const todoTasks = tasks.filter((task) => task.status === 'todo');
  const doingTasks = tasks.filter((task) => task.status === 'doing');
  const doneTasks = tasks.filter((task) => task.status === 'done');

  return (
    <div>
      <Navbar />

      <div className="main__container">
        <AddForm addTask={addTask} />
        <div className="main__cards">
          <div className="main__card-todo custom__card">
            <h2>To do</h2>
            <TaskList
              tasks={todoTasks}
              removeTask={removeTask}
              moveTask={moveTask}
              imageSrc={images.moveArrow}
            />
          </div>
          <div className="main__card-doing custom__card">
            <h2>Doing</h2>
            <TaskList
              tasks={doingTasks}
              removeTask={removeTask}
              moveTask={moveTask}
              imageSrc={images.check}
            />
          </div>
          <div className="main__card-done custom__card">
            <h2>Done</h2>
            <TaskList
              tasks={doneTasks}
              removeTask={removeTask}
              moveTask={moveTask}
              imageSrc={images.returnButton}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
