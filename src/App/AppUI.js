import React from "react"
import { TodoCounter } from "../TodoCounter"
import { TodoSearch } from "../TodoSearch"
import { TodoList } from "../TodoList"
import { TodoItem } from "../TodoItem"
import { CreateTodoButton } from "../CreateTodoButton"
import { Modal } from "../Modal"
import { TodoForm } from "../TodoForm"
import { TodoLoader } from "../TodoLoader"
import { TodoContext } from "../TodoContext"
import "./App.css"

function AppUI() {
    const { error, loading, searchedTodos, toggleCompleteTodo, deleteTodo, openModal, setOpenModal } = React.useContext(TodoContext)

    return (
        <React.Fragment>
            <h1 className="App-Title">Tasky</h1>
            <TodoCounter />

            <TodoSearch />

            <TodoList>
                {error && <p className="Todo-Message Todo-Message--error">Hubo un error</p>}
                {loading && <TodoLoader 
                    width="100%"
                    foregroundColor="#6f74ff"
                />}
                {!loading && !searchedTodos.length && <p className="Todo-Message Todo-Message--error">Crea tu primer Tarea :)</p>}

                {searchedTodos.map((todo) => (
                    <TodoItem
                        key={todo.text}
                        text={todo.text}
                        complete={todo.completed}
                        onCheck={() => toggleCompleteTodo(todo.text)}
                        onDelete={() => deleteTodo(todo.text)}
                    />
                ))}
            </TodoList>

            {openModal && (
                <Modal>
                    <TodoForm />
                </Modal>
            )}

            <CreateTodoButton setOpenModal={setOpenModal} openModal={openModal} />
        </React.Fragment>
    )
}

export { AppUI }
