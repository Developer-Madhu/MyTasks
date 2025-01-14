import React, { useState } from 'react'
import { PlusCircle } from 'phosphor-react'
import './Search.css'
import Tasks from './Tasks'
import MyCalendar from './MyCalendar'

const Search = () => {

  const [inputVal, setInputVal] = useState('')
  const [textareaVal, setTextVal] = useState('')
  const [allTasks, setAlltasks] = useState(() => {
    const savedTasks = localStorage.getItem('tasks');
    return savedTasks ? JSON.parse(savedTasks) : [];
  });


  const handleInputChange = (event) => {
    setInputVal(event.target.value);
  };
  const handleTextChange = (event) => {
    setTextVal(event.target.value);
  };

  const handleClick = () => {
    let taskTitle = inputVal.trim()
    let desc = textareaVal.trim()
    const singleTask = {
      title: taskTitle,
      info: desc,
      timeAdded: Date.now()
    }
    const updatedTasks = [...allTasks, singleTask];
    setAlltasks(updatedTasks)
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
    setInputVal('');
    setTextVal('');
  }

  return (
    <div className='search'>
      <div className="searchbox">
        <input type="text" value={inputVal} onChange={handleInputChange} placeholder='Add a task' />
        <br />
        <button onClick={handleClick} className="add"><PlusCircle size={32} /></button>
      </div>
      <br />
      <div className="desc">
        <textarea draggable="false" value={textareaVal} onChange={handleTextChange} placeholder='Add description' name="textarea" id="textbox"></textarea>
      </div>
      <br />
      <MyCalendar />
      <br />
      <Tasks taskVals={allTasks} />
    </div>
  )
}

export default Search