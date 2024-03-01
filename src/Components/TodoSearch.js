import React from 'react'
import './TodoSearch.css'

function TodoSearch({
  searchValue,
  setSearchValue
}) {
  return (
      <input id='search' 
      value={searchValue}
      className='TodoSearch' 
      type='search' 
      placeholder='Buscar una tarea 🔍' 
      onChange={(event) => {
        setSearchValue(event.target.value);
      }}
      />
  )
}

export { TodoSearch }