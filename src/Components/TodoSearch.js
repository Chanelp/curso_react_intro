import React from 'react'
import './TodoSearch.css'

function TodoSearch() {

  let [searchValue, setSearchValue] = React.useState('');
  console.log(searchValue);

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