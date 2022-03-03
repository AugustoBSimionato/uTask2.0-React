import React, { useState } from 'react';
import './AddForm.css';
import { v4 } from 'uuid';

function AddForm({ addTask, addSrc }) {

  const [task, setTask] = useState({
    task: '',
    id: '',
    status: 'todo'
  });

  function handleTaskInputChange(e) {
    setTask({ ...task, task: e.target.value });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (task.task.trim()) {
      addTask({ ...task, id: v4() });
      setTask({ ...task, task: '' });
    }
  }

  return (
    <form className="main__add-task flex__center" autoComplete='off' onSubmit={handleSubmit}>
      <div className="main__form custom__card">
        <input
          type="text"
          name="task"
          value={task.task}
          onChange={handleTaskInputChange}
          placeholder="Adicionar Tarefa..."
        />
      </div>
      <button type="submit" className="main__add-icon">
        <img src={addSrc} alt="" />
      </button>
    </form>
  );
}

export default AddForm;