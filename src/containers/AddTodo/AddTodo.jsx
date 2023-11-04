import './AddTodo.scss'
import React, { Fragment } from 'react';
import plus from '../../assets/plus.svg'

function AddTodo({onAddTodo}) {
    const inputRef = React.useRef(null)

    const submitHandler = React.useCallback(() => {
        const content = inputRef.current.value
        onAddTodo(content)
        inputRef.current.value = '';
    }, [onAddTodo])

    return ( 
        <Fragment>
            <input ref={inputRef} className='add-todo-input' type='text' placeholder='Gormek istediyiniz isi elave edin'/>
            <div className='add-todo-button' onClick={submitHandler}>
                <div>Add</div>
                <img src={plus} alt="add" />
            </div>
        </Fragment>
    )
}

export default AddTodo