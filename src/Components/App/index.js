import './App.css';
import {useState} from 'react';
import { useLocalStorage } from '../../Hooks/useLocalStorage';
import { AppUI } from './AppUI';

function App() {
  
  const { item: todos, saveItem: saveTodos, loading, error} = useLocalStorage("TODOS_V1", []);

  const [searchValue, setSearchValue] = useState('');
  console.log(searchValue);

  const todosCompleted = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length;

  const searchedTodos = todos.filter(todo => (todo.text.toLowerCase().includes(searchValue.toLocaleLowerCase())));

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
    <AppUI 
        todosCompleted={todosCompleted} 
        totalTodos={totalTodos} 
        searchValue={searchValue} 
        setSearchValue={setSearchValue} 
        searchedTodos={searchedTodos} 
        completeTodo={completeTodo} 
        deleteTodo={deleteTodo}
        loading={loading}
        error={error}
    />
    </>
  );
}

export default App;
