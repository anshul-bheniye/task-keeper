import {useEffect, useState} from 'react';
import { Header } from './components/Header';
import {AddTask} from './components/AddTask';
import {ShowTask} from './components/ShowTask';
import './app.css';

export const App = () => {
  const [addTasks, setAddTasks] = useState(JSON.parse(localStorage.getItem('addTasks')) || [])
  const [editTask, setEditTask] = useState({})

  useEffect(()=>{
    localStorage.setItem('addTasks', JSON.stringify(addTasks))
  },[addTasks])
  return (
    <div className="app">
      <Header />
      <AddTask 
      addTasks={addTasks}
      setAddTasks={setAddTasks}
      editTask={editTask}
      setEditTask={setEditTask}
      />
      <ShowTask 
      addTasks={addTasks}
      setAddTasks={setAddTasks}
      editTask={editTask}
      setEditTask={setEditTask}
      />
    </div>
  );
}

