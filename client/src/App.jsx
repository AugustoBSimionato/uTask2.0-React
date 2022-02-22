import React, { useState } from 'react';
import { Navbar, AddForm, TaskList } from './components';

import './App.css';

function App() {
  const [tasks, setTask] = useState([]);

  function addTask(task) {
    setTask([task, ...tasks]);
  }

  function removeTask(id) {
    setTask(tasks.filter((task) => task.id !== id));
  }

  return (
    <div>
      <Navbar />

      <div className="main__container">
        <AddForm addTask={addTask} />
        <div className="main__cards">
          <div className="main__card-todo custom__card">
            <h2>To do</h2>
            <TaskList tasks={tasks} removeTask={removeTask} />
          </div>
          <div className="main__card-doing custom__card">
            <h2>Doing</h2>
            <ul className="main__card-doing_list"></ul>
          </div>
          <div className="main__card-done custom__card">
            <h2>Done</h2>
            <ul className="main__card-done_list"></ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
