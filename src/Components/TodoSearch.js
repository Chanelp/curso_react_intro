import React from 'react'
import './TodoSearch.css'

function TodoSearch() {
  return (
      <input id='search' className='TodoSearch' type='search' placeholder='Buscar una tarea 🔍' 
      onChange={(event) => {
        console.log(event.target.value);
      }}
      />
  )
}

export { TodoSearch }