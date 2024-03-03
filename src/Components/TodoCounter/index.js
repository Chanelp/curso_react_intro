import React from 'react'
import './TodoCounter.css'
import { TodoContext } from '../../Context/TodoContext';

function TodoCounter() {

  const { todosCompleted, totalTodos, loading } = React.useContext(TodoContext);

  return (
    loading ? <h1 className='TodoCounter'>Cargando las tareas.</h1>
    :
    totalTodos === todosCompleted ? 
      <h1 className='TodoCounter'>Felicidades, completaste todas las tareas 🥳.</h1>
      :
      <h1 className='TodoCounter'>Has completado <span>{todosCompleted}</span> de <span>{totalTodos}</span> tareas 👍.</h1>
  )
}

export { TodoCounter }