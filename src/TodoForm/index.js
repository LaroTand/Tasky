import React from "react"
import { TodoContext } from "../TodoContext"
import "./TodoForm.css"

function TodoForm() {
    const [newTodoValue, setNewTodoValue] = React.useState("")

    const { addTodo } = React.useContext(TodoContext)

    // const onCancel = () => {
    //     // TODO
    // }

    const onSubmit = (event) => {
        event.preventDefault()

        if (newTodoValue.trim() !== "") {
            addTodo(newTodoValue)
        }

        setNewTodoValue("")
    }

    const onChange = (event) => {
        setNewTodoValue(event.target.value)
    }

    return (
        <form onSubmit={onSubmit}>
            <label>Escribe tu nueva tarea</label>
            <textarea value={newTodoValue} onChange={onChange} placeholder="Ir al supermercado" />
            <div className="TodoForm-buttonConatiner">
                {/*<button type="button" onClick={onCancel}>
                    <i className="fa-solid fa-plus"></i>
                </button>*/}

                <button className="TodoForm-button" type="submit">
                    {/* <i className="fa-solid fa-plus"></i> */}
                    Añadir
                </button>
            </div>
        </form>
    )
}

export { TodoForm }
