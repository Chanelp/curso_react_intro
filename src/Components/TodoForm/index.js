import './TodoForm.css';

function TodoForm(){
    return (
        <form>
            <label>Crea tu nuevo TODO 🎯</label>
            <textarea placeholder='Hacer cardio'></textarea>
            <div className='TodoForm-buttonContainer'>
                <button className='TodoForm-button TodoForm-button--cancel'>Cancelar</button>
                <button className='TodoForm-button TodoForm-button--add'>Añadir</button>
            </div>
        </form>
    );
}

export { TodoForm };