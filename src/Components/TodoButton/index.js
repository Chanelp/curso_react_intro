import React from 'react'
import "./TodoButton.css";

function TodoButton({ setOpenModal }) {
  return (
    <div className='CreateTodoButton' onClick={() => {
      setOpenModal(state => !state);
    }
  }
  >+</div>
  )
}

export { TodoButton }