import React from "react"
import "./CreateTodoButton.css"

function CreateTodoButton(props) {

    // Funcion que recibe el evento
    const onClickButton = () => {
        props.setOpenModal(!props.openModal)
    }

    return (
        <button 
            className={`CreateTodoButton ${props.openModal && "Active"}`}

            // Eventos siempre inician con on
            /*  Si queremos pasar un parametro, debemos 
                envolverla en una funcion anonima*/
            onClick={onClickButton}
        >
            <i className="CreateTodoButton-icon fa-solid fa-plus"></i>
            
        </button>
    )
}

export { CreateTodoButton }
