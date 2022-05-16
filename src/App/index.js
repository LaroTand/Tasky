import React from "react"
import { AppUI } from "./AppUI"
import { TodoProvider } from "../TodoContext"

// const defaultTodos = [
//     { text: "Hacer la compra", completed: false },
//     { text: "Hacer la cena", completed: true },
//     { text: "Hacer la limpieza", completed: false },
// ]

function App() {
    

    return (
        <TodoProvider>
            <AppUI />
        </TodoProvider>
    )
}

export default App
