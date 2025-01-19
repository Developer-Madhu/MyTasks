// import React, { useState } from 'react'
// import { PlusCircle } from 'phosphor-react'
// import './Search.css'
// import Tasks from './Tasks'
// import MyCalendar from './MyCalendar'

// const Search = () => {

//   const [inputVal, setInputVal] = useState('')
//   const [textareaVal, setTextVal] = useState('')
//   const [allTasks, setAlltasks] = useState(() => {
//     const savedTasks = localStorage.getItem('tasks');
//     return savedTasks ? JSON.parse(savedTasks) : [];
//   });


//   const handleInputChange = (event) => {
//     setInputVal(event.target.value);
//   };
//   const handleTextChange = (event) => {
//     setTextVal(event.target.value);
//   };

//   const handleClick = () => {
//     let taskTitle = inputVal.trim()
//     let desc = textareaVal.trim()
//     const singleTask = {
//       title: taskTitle,
//       info: desc,
//       timeAdded: Date.now()
//     }
//     const updatedTasks = [...allTasks, singleTask];
//     setAlltasks(updatedTasks)
//     localStorage.setItem('tasks', JSON.stringify(updatedTasks));
//     setInputVal('');
//     setTextVal('');
//   }

//   return (
//     <div className='search'>
//        <div className="searchbox">
//         <input type="text" value={inputVal} onChange={handleInputChange} placeholder='Add a task' />
//         <br />
//         <button onClick={handleClick} className="add"><PlusCircle size={32} /></button>
//       </div>
//       <br />
//       <div className="desc">
//         <textarea draggable="false" value={textareaVal} onChange={handleTextChange} placeholder='Add description' name="textarea" id="textbox"></textarea>
//       </div>
//       <br />
//       <MyCalendar />
//       <br /> 
//       <Tasks taskVals={allTasks} />
//     </div>
//   )
// }

// export default Search
import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './Search.css';

const Search = ({ addTask }) => {
  const [taskName, setTaskName] = useState('');
  const [taskDescription, setTaskDescription] = useState('');
  const [taskDate, setTaskDate] = useState(new Date());

  const handleAddTask = () => {
    if (taskName.trim() && taskDescription.trim()) {
      const newTask = {
        name: taskName,
        description: taskDescription,
        date: taskDate.toDateString(),
      };
      addTask(newTask);
      setTaskName('');
      setTaskDescription('');
      setTaskDate(new Date());
    } else {
      alert('Please fill in all fields before adding a task.');
    }
  };

  const disablePastDates = (date) => {
    const today = new Date();
    return date >= today.setHours(0, 0, 0, 0); // Only allow dates from today onwards
  };

  return (
    <div className="task-manager">
      <h1>Task Manager</h1>
      <input
        type="text"
        placeholder="Task Name"
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
      />
      <textarea
        placeholder="Task Description"
        value={taskDescription}
        onChange={(e) => setTaskDescription(e.target.value)}
      />
      <h3>Select Due Date:</h3>
      <Calendar
        className="custom-calendar"
        value={taskDate}
        onChange={setTaskDate}
        tileDisabled={({ date }) => !disablePastDates(date)}
      />
      <button onClick={handleAddTask}>Add Task</button>
    </div>
  );
};

export default Search;
