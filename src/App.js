import './App.css';
import { TodoCounter } from "./Components/TodoCounter";
import { TodoSearch } from "./Components/TodoSearch";
import { TodoList } from "./Components/TodoList";
import { TodoItem } from './Components/TodoItem';
import { TodoButton } from './Components/TodoButton';
import { Fragment } from 'react';

const defaultTodos = [
  { text: 'Curso de cocina', completed: false },
  { text: 'Curso del DOM', completed: true },
  { text: 'Curso de Figma', completed: false },
  { text: 'Curso de JavaScript', completed: true },
];

function App() {
  return (
    <Fragment>
      <TodoCounter total={5} completed={3} />
      <TodoSearch/>

      <TodoList>
        {defaultTodos.map(todo => (
          <TodoItem key={todo.text} text={todo.text}></TodoItem>
        ))}
      </TodoList>

      <TodoButton/>
    </Fragment>
  );
}

export default App;
