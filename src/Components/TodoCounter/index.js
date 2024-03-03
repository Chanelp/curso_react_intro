import React from 'react'
import './TodoCounter.css'

function TodoCounter({ completed, total, loading }) {
  return (
    loading ? <h1 className='TodoCounter'>Cargando las tareas.</h1>

    :

    total === completed ? 

      <h1 className='TodoCounter'>Felicidades, completaste todas las tareas 🥳.</h1>
      :
      <h1 className='TodoCounter'>Has completado <span>{completed}</span> de <span>{total}</span> tareas 👍.</h1>
  )
}

export { TodoCounter }