import { configureStore } from '@reduxjs/toolkit'
import todosReducer from "../features/todos/todoSlice.js";

export default configureStore({
    reducer: {
        todos: todosReducer
    },
})
