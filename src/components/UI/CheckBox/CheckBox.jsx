import './CheckBox.scss'
import checkedImage from '../../../assets/checked.png'

function CheckBox({completed, onChecked}) {


    return (
        <div onClick={onChecked} className={'CheckBox ' + (completed ? 'CheckBox-checked' : '')}>
            <img className='checked-icon' src={checkedImage} alt="checked" />
        </div>
    )
}


export default CheckBox;