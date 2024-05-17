import { createSlice,nanoid } from "@reduxjs/toolkit";
// nanoid is a method which genearte unique id


// initail state of Todo
const initialState = {
    todos: [{id: 1, text: "Hello world"}]
}

export const todoSlice = createSlice( {
    name: 'todo',
    initialState,
    
    // function declaration and definition of reducer
    reducers:{
        // state gives access of initial state and action - gives data with id of what i have to add or delete
        addTodo: (state,action) =>{
            const todo = {
                id : nanoid(),
                text: action.payload
            }
            state.todos.push(todo)
        },

        removeTodo: (state,action) =>{
          state.todos = state.todos.filter((todo)=> 
            todo.id !== action.payload)
        },

    }

})


//export individual property this will be helful in components
export const{addTodo,removeTodo} = todoSlice.actions

// store- update value through reducer means - store ke paas jo reducer registered hoga unhi se value lekr update krega, sare reducer  ak list chahiye hota h
export default todoSlice.reducer