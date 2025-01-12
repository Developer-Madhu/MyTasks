import React from 'react'
import { PlusCircle } from 'phosphor-react'
import './Search.css'

const Search = () => {
  return (
    <div className='search'>
        <div className="searchbox">
            <input type="text" placeholder='Add a task' />
            <br />
            <button className="add"><PlusCircle size={32} /></button>
        </div>
        <br />
        <div className="desc">
            <textarea draggable="false" placeholder='Add description' name="textarea" id="textbox"></textarea>
        </div>
    </div>
  )
}

export default Search