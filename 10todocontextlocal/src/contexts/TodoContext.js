import {createContext, useContext} from "react"

export const TodoContext = createContext({
    todo:[
       {
        id: 1,
        todo: "Todo msg",
        completed: false,

       }
    ],

    addTodo: (todo) => {},
    updateTodo: (id, todo) => {},
    deleteTodo: (id) => {},
    toggleComplete: (id) => {}

})

export const useTodo = () =>{

    return useContext(TodoContext);
}

export const TodoProvider = TodoContext.Provider