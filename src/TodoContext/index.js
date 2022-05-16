import React from "react"
import { useLocalStorage } from "./useLocalStorage"

const TodoContext = React.createContext()

function TodoProvider(props) {
    const { item: todos, saveItem: saveTodos, loading, error } = useLocalStorage("TODOS_V1", [])

    const [searchValue, setSearchValue] = React.useState("")

    const [openModal, setOpenModal] = React.useState(false)

    const completedTodos = todos.filter((todo) => todo.completed).length
    const totalTodos = todos.length

    let query = searchValue.toLowerCase()
    let searchedTodos = todos.filter((todo) => todo.text.toLowerCase().includes(query))

    const toggleCompleteTodo = (text) => {
        const todoIndex = todos.findIndex((todo) => todo.text === text)
        todos[todoIndex].completed = !todos[todoIndex].completed
        saveTodos([...todos])
    }

    const addTodo = (text) => {
        todos.push({ text, completed: false })
        saveTodos([...todos])
    }

    const deleteTodo = (text) => {
        const todoIndex = todos.findIndex((todo) => todo.text === text)
        todos.splice(todoIndex, 1)
        saveTodos([...todos])
    }

    return (
        <TodoContext.Provider
            // Los valores que se pasaran a los hijos
            value={{
                loading,
                error,
                totalTodos,
                completedTodos,
                searchValue,
                setSearchValue,
                searchedTodos,
                toggleCompleteTodo,
                addTodo,
                deleteTodo,
                openModal,
                setOpenModal
            }}
        >
            {props.children}
        </TodoContext.Provider>
    )
}

export { TodoContext, TodoProvider}

