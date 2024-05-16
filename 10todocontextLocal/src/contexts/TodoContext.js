import { createContext,useContext } from "react";

export const TodoContext = createContext({
    
    //properties- values
    todos: [
        {
            id:1,
            todo: " todo msg",
            completed: false
        }
    ],

    // methods- define therie functionality in App.jsx
    addTodo: (todo) =>{},
    updateTodo: (id, todo) => {},
    deleteTodo : (id) =>{},
    toggleComplete: (id) =>{}
})

export const useTodo = ()=>{
    return useContext(TodoContext)
}

export const TodoProvider = TodoContext.Provider