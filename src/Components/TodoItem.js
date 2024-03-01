import React from 'react'
import './TodoItem.css'

function TodoItem(props) {
  return (
      <li className='TodoItem'>
        <span className='Icon Icon-check Icon-check--active'>✅</span>
        <p className='TodoItem-p TodoItem-p--complete'>{props.text}</p>
        <span className='Icon Icon-delete'>⛔</span>
      </li>
  )
}

export { TodoItem }