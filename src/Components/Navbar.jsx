import React from 'react'
import './Navbar.css'
import {List} from 'phosphor-react'

const Navbar = () => {
    return (
        <div className='navbar'>
            <div className="titles">
                <h1>MyTasks</h1>
            </div>
            <div className="options-ls">
                <button>Login</button>
                <button>Analytics</button>
            </div>
            <div className='icon'><List size={32} /></div>
            <div className="options-ms">
                <p>Login</p>
                <p>Analytics</p>
                <p>Logout</p>
            </div>
        </div>
    )
}

export default Navbar