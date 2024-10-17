import React from 'react'

function Days() {
    const days_list = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
  return (
    <div>
        <h2>Days of the Week</h2>
        <ul>
            {days_list.map((day, index)=>(
                <li key={index}>{day}</li>
            ))}
        </ul>
    </div>
  )
}

export default Days