import React, { useState, useEffect } from 'react';
import { AddForm, TaskList } from './components';
import { useDispatch, useSelector } from 'react-redux';

import { getTasks, createTask, updateTask, deleteTask } from './actions/tasks';
import images from './constants/images';

import './App.css';

function App() {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [src, setSrc] = React.useState(images.addBlack);
  const [checked, setChecked] = React.useState(false);
  const [url, setUrl] = useState();
  const [id, setId] = useState(null);
  const dispatch = useDispatch();

  const tasks = useSelector((state) => state.tasks);
  const task = useSelector((state) => id ? state.tasks.find((t) => t._id === id) : null);

  function addTask(task) {
    dispatch(createTask(task));
  }

  function removeTask() {
    dispatch(deleteTask(id))
  }

  function moveTask() {
    if (task.status === 'todo')
      task.status = 'doing';
    else if (task.status === 'doing')
      task.status = 'done';
    else
      task.status = 'todo';

    dispatch(updateTask(id, task))
    setId(null);
  }

  const todoTasks = tasks.filter((task) => task.status === 'todo');
  const doingTasks = tasks.filter((task) => task.status === 'doing');
  const doneTasks = tasks.filter((task) => task.status === 'done');

  const toggleAddSrc = () => {
    let addSrc = src;

    if (addSrc === images.addBlack) {
      setSrc(images.addBlue);
    } else {
      setSrc(images.addBlack);
    }
  };

  const submitBackgroundImage = (e) => {
    e.preventDefault();
  }

  const changeBackgroundImage = (e) => {
    setUrl(e.target.value);
  }

  useEffect(() => {
    dispatch(getTasks());
  }, [id, dispatch]);

  return (
    <div className={darkMode ? 'dark-mode' : 'light-mode'} style={{ backgroundImage: "url(" + url + ")" }}>
      <div className='navbar__container'>
        <div className='navbar__logo'>
          <img src={images.logo} alt='app logo' />
        </div>
        <h1 className='navbar__title flex__center'>uTask&nbsp;<span>2.0</span></h1>
        <div className='navbar__menu'>
          <img src={images.config} alt='config icon' onClick={() => setToggleMenu(true)} />

          {toggleMenu && (
            <>
              <div className='menu__overlay-back' onClick={() => setToggleMenu(false)} />
              <div className='menu__container custom__card'>
                <h2>Configuração</h2>
                <div className='menu__functions'>
                  <div className='menu__dark-mode'>
                    <h3>Dark Mode</h3>
                    <label className='custom__switch'>
                      <input
                        type='checkbox'
                        id='checkbox'
                        onChange={() => { setDarkMode(!darkMode), setChecked(!checked) }}
                        defaultChecked={checked}
                        onClick={toggleAddSrc}
                      />
                      <span className='custom__check'></span>
                    </label>
                  </div>
                  <div className='menu__background'>
                    <h3>Plano de Fundo</h3>
                  </div>
                  <form onSubmit={submitBackgroundImage}>
                    <div className='menu__background-form flex__center'>
                      <input
                        type='url'
                        id='background__url'
                        placeholder='Url'
                        value={url}
                        onChange={changeBackgroundImage}
                      />
                    </div>
                    <div className='menu__buttons'>
                      <input
                        type='reset'
                        value='Limpar'
                        className='menu__button-clear custom__button'
                        onClick={() => setUrl(() => '')}
                      />
                      <input
                        type='submit'
                        value='Aplicar'
                        className='menu__button-apply custom__button'
                      />
                    </div>
                  </form>
                </div>
              </div>
            </>
          )}
        </div>
      </div>

      <div className="main__container">
        <AddForm addTask={addTask}
          addSrc={src} />
        <div className="main__cards">
          <div className="main__card-todo custom__card">
            <h2>To do</h2>
            <TaskList
              tasks={todoTasks}
              removeTask={removeTask}
              moveTask={moveTask}
              setId={setId}
              imageSrc={images.moveArrow}
            />
          </div>
          <div className="main__card-doing custom__card">
            <h2>Doing</h2>
            <TaskList
              tasks={doingTasks}
              removeTask={removeTask}
              moveTask={moveTask}
              setId={setId}
              imageSrc={images.check}
            />
          </div>
          <div className="main__card-done custom__card">
            <h2>Done</h2>
            <TaskList
              tasks={doneTasks}
              removeTask={removeTask}
              moveTask={moveTask}
              setId={setId}
              imageSrc={images.returnButton}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
