import React from 'react'
import './Analytics.css'

const Analytics = () => {
    return (
        <div className='analytics'>
            <div className="first-div">
                <div className="count">0</div>
                <div className="names">
                    <h2>Days of Streak</h2>
                </div>
            </div>
            <div className="second-div">
                <div className="count">0</div>
                <div className="names">
                    <h2>Pending tasks</h2>
                </div>
            </div>
            <div className="third-div">
                <div className="count">0</div>
                <div className="names">
                    <h2>Completed Tasks</h2>
                </div>
            </div>
        </div>
    )
}

export default Analytics