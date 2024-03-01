import './App.css';
import { TodoCounter } from "./Components/TodoCounter";
import { TodoSearch } from "./Components/TodoSearch";
import { TodoList } from "./Components/TodoList";
import { TodoItem } from './Components/TodoItem';
import { TodoButton } from './Components/TodoButton';


function App() {
  return (
    <div className="App">
      <TodoCounter/>
      <TodoSearch/>

      <TodoList>
        <TodoItem/>
        <TodoItem/>
        <TodoItem/>
      </TodoList>

      <TodoButton/>
    </div>
  );
}

function Todo(){
  return (
    <ul>
      <h3>Tareas</h3>
      <span>V</span>
      <li>Aprender react</li>
      <span>X</span>
    </ul>
  );
}

export default App;
