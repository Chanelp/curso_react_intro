import React from 'react'
import './TodoSearch.css'
import { TodoContext } from '../../Context/TodoContext';

function TodoSearch() {

  const { searchValue, setSearchValue } = React.useContext(TodoContext);

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