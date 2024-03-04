import './TodoForm.css';

function TodoForm(){
    return (
        <form onSubmit={(event) => {
            event.preventDefault();
        } }>
            <label>Crea tu nuevo TODO 🎯</label>
            <textarea placeholder='Hacer cardio'></textarea>
            <div className='TodoForm-buttonContainer'>
                <button type='button' className='TodoForm-button TodoForm-button--cancel'>Cancelar</button>
                <button type='button' className='TodoForm-button TodoForm-button--add'>Añadir</button>
            </div>
        </form>
    );
}

export { TodoForm };