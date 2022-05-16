import React from "react"
import "./TodoItem.css"

function TodoItem(props) {

    // const onComplete = () => {
    //     alert('Ya completaste la tarea ' + props.text)
    // }

    // const onDelete = () => {
    //     alert('Borraste el todo ' + props.text)
    // }

    return (
        <li className="TodoItem">
            <i 
                className={`TodoItem-check ${props.complete && 'TodoItem-check--active'} fa-solid fa-check`}
                onClick={props.onCheck}
            ></i>
            <p className={`TodoItem-p ${props.complete && 'TodoItem-p--complete'}`}>{props.text}</p>
            <i 
                className="TodoItem-delete fa-solid fa-circle-minus"
                onClick={props.onDelete}
            ></i>
        </li>
    )
}

export { TodoItem }
