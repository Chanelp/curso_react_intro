import React from 'react'
import "./TodoButton.css";

function TodoButton({ setModalVisibility }) {
  return (
    <div className='CreateTodoButton' onClick={() => {
      setModalVisibility(state => !state);
    }
  }
  >+</div>
  )
}

export { TodoButton }