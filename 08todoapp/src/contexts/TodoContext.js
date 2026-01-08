import React from 'react'
import { createContext, useContext } from 'react'

export const TodoContext = createContext({
    todos:[
        {
            id: 1,
            todo: "dsa practice",
            completed: true
        }
    ],
    addTodo : (todo) => {},
    updateTodo : (id,todo) => {},
    toggleComplete : (id) => {}

})

export const useTodo = () => {
    return useContext(TodoContext)
}


export const TodoProvider = TodoContext.Provider