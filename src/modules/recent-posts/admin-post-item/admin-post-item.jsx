import { Link } from "react-router-dom";
import hour from '../../../assets/img/hour.png'

export function ListItem(props) {
    return (
        <li className='posts-item'>
        <Link className='posts-item' to='/infarmation'>
            <span>{props.created_time}</span>
            <b>{props.category_name}</b>
            <p>{props.title}</p>
            <div> <img src={hour} alt="" /> 3 minutes read</div>
        </Link>
            <button className="btn-edit" type="Submit" data-id={props.id}>Edit</button>
            <button className="btn-delete" type="delete" data-id={props.id}>Delete</button>
    </li>
    )
}