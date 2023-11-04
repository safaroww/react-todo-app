import CheckBox from '../UI/CheckBox/CheckBox';
import './Todo.scss'
import removeImage from '../../assets/trash.png'

function Todo({content, completed, onChecked, onDeleted}) {
    

    return (
        <div className='Todo'>
            <div className="checkbox-div">
                <CheckBox onChecked={onChecked} completed={completed}/>
            </div>
            <div className={'content ' + (completed ? 'content-checked' : '')}>
                {content} 
            </div>
            <div onClick={onDeleted} className="trash-div">
                <img src={removeImage} alt="remove" />
            </div>
        </div>
    )
}


export default Todo;