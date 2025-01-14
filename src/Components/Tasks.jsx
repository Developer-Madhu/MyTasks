import React, { useState } from 'react';
import './Tasks.css';

const Tasks = ({ taskVals }) => {
  const [tasks, setTasks] = useState(taskVals);

  const handleSingleClick = (index) => {
    const updatedTasks = tasks.map((task, i) =>
      i === index
        ? { ...task, isStriked: !task.isStriked } 
        : task
    );
    setTasks(updatedTasks);
  };

    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
  
    const formattedTime = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}`;
  
  const handleDoubleClick = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index); 
    setTasks(updatedTasks);
    localStorage.setItem('tasks', JSON.stringify(updatedTasks)); 
  };

  return (
    <div className="tasks">
      {tasks.length > 0 ? (
        tasks.map((task, index) => (
          <div key={index} className="container" onClick={() => handleSingleClick(index)} onDoubleClick={() => handleDoubleClick(index)}
            style={{  cursor: 'pointer', textDecoration: task.isStriked ? 'line-through' : 'none', opacity: task.isStriked ? 0.6 : 1, }}>
            <p id="hash">TASK</p>
            <h2>{task.title}</h2>
            <br />
            <p>{task.info}</p>
            <br /><br />
            <p id='time'>{formattedTime}</p>
          </div>
        ))
      ) : (
        <p>No tasks available. Add a task to get started!</p>
      )}
    </div>
  );
};

export default Tasks;
