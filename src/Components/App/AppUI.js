
import { TodoCounter } from "../TodoCounter";
import { TodoSearch } from "../TodoSearch";
import { TodoList } from "../TodoList";
import { TodoItem } from '../TodoItem';
import { TodoButton } from '../TodoButton';
import { TodosLoading } from '../TodosLoading';
import { TodosError } from '../TodosError';
import { EmptyTodos } from '../EmptyTodos';
import { TodoContext } from "../../Context/TodoContext";

function AppUI(){
    return (
        <>
          <TodoCounter />
          <TodoSearch />
          
          <TodoContext.Consumer>
            {({loading, error, searchedTodos, completeTodo, deleteTodo}) => (
                <TodoList>
                { loading && <TodosLoading/> }
    
                { error && <TodosError/>}
    
                { (!loading && searchedTodos.length === 0) && <EmptyTodos/> }
    
                {searchedTodos.map((todo, index) => (
                  <TodoItem 
                    key={index} 
                    text={todo.text} 
                    completed={todo.completed} 
                    onComplete={() => completeTodo(todo.text)} 
                    onDelete={() => deleteTodo(todo.text)} />
                ))}
              </TodoList>
              )
            }
          </TodoContext.Consumer>
    
          <TodoButton/>
        </>
      );
}

export { AppUI };