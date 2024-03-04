import React from "react";
import { TodoCounter } from "../TodoCounter";
import { TodoSearch } from "../TodoSearch";
import { TodoList } from "../TodoList";
import { TodoItem } from '../TodoItem';
import { TodoButton } from '../TodoButton';
import { TodosLoading } from '../TodosLoading';
import { TodosError } from '../TodosError';
import { EmptyTodos } from '../EmptyTodos';
import { TodoContext } from "../../Context/TodoContext";
import { Modal } from "../Modal";
import { TodoForm } from "../TodoForm";

function AppUI(){
  const {loading, error, searchedTodos, completeTodo, deleteTodo, totalTodos, openModal, setOpenModal} = React.useContext(TodoContext);

    return (
        <>
          <TodoCounter />
          <TodoSearch />
          <TodoList>
            { loading && <TodosLoading/> }
            { error && <TodosError/>}
            { (!loading && totalTodos.length === 0) && <EmptyTodos/> }
            {(!loading && totalTodos > 0 && searchedTodos.length === 0) && <p>No hay coincidencias</p>}

            {searchedTodos.map((todo, index) => (
              <TodoItem 
                key={index} 
                text={todo.text} 
                completed={todo.completed} 
                onComplete={() => completeTodo(todo.text)} 
                onDelete={() => deleteTodo(todo.text)} />
            ))}
        </TodoList>
        <TodoButton setOpenModal={setOpenModal}/>
        
        { openModal && ( <Modal><TodoForm></TodoForm></Modal> ) }
        </>
      );
}

export { AppUI };