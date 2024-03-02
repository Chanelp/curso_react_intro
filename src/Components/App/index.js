import './App.css';
import {useEffect, useState} from 'react';
import { useLocalStorage } from '../../Hooks/useLocalStorage';
import { AppUI } from './AppUI';

function App() {

  const [message, setMessage] = useState({});

  async function API(url) {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  }

  useEffect(() => {
    async function fetchData() {
      const data = await API("https://api.chucknorris.io/jokes/random");
      setMessage(data);
    }

    fetchData();
  }, []);
  
  const [todos, saveTodos] = useLocalStorage("TODOS_V1", []);

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
    <p>{message.value || "Cargando"}</p>
    <AppUI 
        todosCompleted={todosCompleted} 
        totalTodos={totalTodos} 
        searchValue={searchValue} 
        setSearchValue={setSearchValue} 
        searchedTodos={searchedTodos} 
        completeTodo={completeTodo} 
        deleteTodo={deleteTodo}
    />
    </>
  );
}

export default App;
