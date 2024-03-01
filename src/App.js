import './App.css';
import { TodoCounter } from "./Components/TodoCounter";
import { TodoSearch } from "./Components/TodoSearch";
import { TodoList } from "./Components/TodoList";
import { TodoItem } from './Components/TodoItem';
import { TodoButton } from './Components/TodoButton';
import React from 'react';

const defaultTodos = [
  { text: 'Curso de cocina', completed: false },
  { text: 'Curso del DOM', completed: true },
  { text: 'Curso de Figma', completed: false },
  { text: 'Curso de JavaScript', completed: true },
  { text: 'Curso de C#', completed: true },
];

function App() {

  const [searchValue, setSearchValue] = React.useState('');
  console.log(searchValue);

  const [todos, setTodos] = React.useState(defaultTodos);
  const todosCompleted = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length;

  return (
    <>
      <TodoCounter completed={todosCompleted} total={totalTodos} />
      <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />

      <TodoList>
        {defaultTodos.map((todo, index) => (
          <TodoItem key={index} text={todo.text} completed={todo.completed}></TodoItem>
        ))}
      </TodoList>

      <TodoButton/>
    </>
  );
}

export default App;
