import logo from './platzi.webp';
import './App.css';

function App() {
  return (
    <div className="App">
      <Todo></Todo>
      <Todo></Todo>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edita el archivo <code>src/App.js</code> y guarda para recargar.
        </p>
        <a
          className="App-link"
          href="https://platzi.com/reactjs"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
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
