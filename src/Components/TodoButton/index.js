import React from 'react'
import "./TodoButton.css";

function TodoButton() {
  return (
    <div className='CreateTodoButton' onClick={(event)=> {
      console.log('Le diste click');
      console.log(event.target);
    }
  }
  >+</div>
  )
}

export { TodoButton }