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

export default App;
