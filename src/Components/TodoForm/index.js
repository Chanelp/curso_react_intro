import React, { useState } from 'react';
import { TodoContext } from '../../Context/TodoContext';
import './TodoForm.css';

function TodoForm(){

    const { setModalVisibility, addTodo } = React.useContext(TodoContext);

    const [newTodoValue, setNewTodoValue] = useState('');

    const onSubmit = (event) => {
        event.preventDefault();
        addTodo(newTodoValue);
        setModalVisibility(false);
    };

    const onCancel = () => {
        setModalVisibility(false);
    }

    const onChange = (event) =>{
        setNewTodoValue(event.target.value);
    }

    return (
        <form onSubmit={onSubmit}>
            <label>Crea tu nuevo TODO 🎯</label>
            <textarea placeholder='Hacer cardio' value={newTodoValue} required onChange={onChange}></textarea>
            <div className='TodoForm-buttonContainer'>
                <button type='button' className='TodoForm-button TodoForm-button--cancel' onClick={onCancel}>Cancelar</button>
                <button type='submit' className='TodoForm-button TodoForm-button--add'>Añadir</button>
            </div>
        </form>
    );
}

export { TodoForm };