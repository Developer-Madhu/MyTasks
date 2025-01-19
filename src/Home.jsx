import React from 'react'
import { useState } from 'react';
import Navbar from './Components/Navbar'
import MainText from './Components/MainText'
import Search from './Components/Search'
import Footer from './Components/Footer'
import Analytics from './Components/Analytics'
import Tasks from './Components/Tasks';

const Home = () => {
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem('tasks');
    return savedTasks ? JSON.parse(savedTasks) : [];
  });
  
  const addTask = (newTask) => {
    const updatedTasks = [...tasks, newTask];
    setTasks(updatedTasks);
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
  };

  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
  };
  return (
    <div>
      <Navbar />
      <MainText />
      <br />
      <Search addTask={addTask} />
      <Tasks tasks={tasks} deleteTask={deleteTask} />
      <Analytics />
      <br />
      <Footer />
    </div>
  )
}

export default Home