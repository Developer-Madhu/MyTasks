import React, { useState } from 'react'
import './Tasks.css'

const Tasks = ({ taskVals }) => {

  return (
    <div className='tasks'>
        {taskVals.length > 0 ? (
          taskVals.map((task, index) => (
            <div key={index} className="container">
              <p id='hash'>TASK</p>
              <h2>{task.title}</h2>
              <br />
              <p>{task.info}</p>
            </div>
          ))
        ) : (
          <p>No tasks available. Add a task to get started!</p>
        )}
    </div>
  )
}

export default Tasks