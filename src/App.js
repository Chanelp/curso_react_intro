import './App.css';
import { TodoCounter } from "./Components/TodoCounter";
import { TodoSearch } from "./Components/TodoSearch";
import { TodoList } from "./Components/TodoList";
import { TodoItem } from './Components/TodoItem';
import { TodoButton } from './Components/TodoButton';
import React from 'react';

// const defaultTodos = [
//   { text: 'Curso de cocina', completed: false },
//   { text: 'Curso del DOM', completed: true },
//   { text: 'Curso de Figma', completed: false },
//   { text: 'Curso de JavaScript', completed: true },
//   { text: 'Curso de C#', completed: true },
// ];

function App() {

  const localStorageTodos = localStorage.getItem('TODOS_V1');
  let parsedTodos;

  if(!localStorageTodos){
    localStorage.setItem('TODOS_V1', JSON.stringify([]));
    parsedTodos = [];
  } else {
    parsedTodos = JSON.parse(localStorageTodos);
  }
  
  const [todos, setTodos] = React.useState(parsedTodos);

  const [searchValue, setSearchValue] = React.useState('');
  console.log(searchValue);

  const todosCompleted = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length;

  const searchedTodos = todos.filter(todo => (todo.text.toLowerCase().includes(searchValue.toLocaleLowerCase())));

  const saveTodos = (newTodos) =>{
    localStorage.setItem("TODOS_V1", JSON.stringify(newTodos));
    setTodos(newTodos);
  }

  const completeTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex((todo) => todo.text === text);

    newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
    saveTodos(newTodos);
  }

  const deleteTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex((todo) => todo.text === text);

    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
  }

  return (
    <>
      <TodoCounter completed={todosCompleted} total={totalTodos} />
      <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />

      <TodoList>
        {searchedTodos.map((todo, index) => (
          <TodoItem 
            key={index} 
            text={todo.text} 
            completed={todo.completed} 
            onComplete={() => completeTodo(todo.text)} 
            onDelete={() => deleteTodo(todo.text)} />
        ))}
      </TodoList>

      <TodoButton/>
    </>
  );
}

export default App;
