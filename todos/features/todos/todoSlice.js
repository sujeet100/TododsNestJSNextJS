import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'

const GET_TODOS = `
  query GetTodos {
    todos {
      id
      description
      status
    }
  }
`;

const ADD_TODOS = (todoDescription) => `
  mutation AddTodo {
      addTodo(addTodoInput: "${todoDescription}") {
        id
        description
        status
      }
  }
`;

export const fetchTodos = createAsyncThunk('todos/fetchTodos', async () => {
    const response =  await fetch('http://localhost:3000/graphql', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            query: GET_TODOS,
        }),
    })
    return response.json();
})

export const addTodo = createAsyncThunk('todos/addTodo', async (todoDescription) => {
    const response =  await fetch('http://localhost:3000/graphql', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            query: ADD_TODOS(todoDescription),
        }),
    })
    return response.json();
})


export const todoSlice = createSlice({
    name: 'todos',
    initialState: {
        todos: [],
        status: 'idle',
        error: null,
    },
    reducers: {
    },
    extraReducers: {
        [fetchTodos.pending]: (state, action) => {
            state.status = 'loading'
        },
        [fetchTodos.fulfilled]: (state, action) => {
            state.status = 'succeeded'
            state.todos = state.todos.concat(action.payload.data.todos)
        },
        [fetchTodos.rejected]: (state, action) => {
            state.status = 'failed'
            state.error = action.payload
        },
        [addTodo.pending]: (state, action) => {
            state.status = 'loading'
        },
        [addTodo.fulfilled]: (state, action) => {
            state.status = 'succeeded'
            state.todos.push(action.payload.data.addTodo)
        },
        [addTodo.rejected]: (state, action) => {
            state.status = 'failed'
            state.error = action.payload
        },
    }
})

export default todoSlice.reducer
export const selectAllTodos = (state) => state.todos.todos
