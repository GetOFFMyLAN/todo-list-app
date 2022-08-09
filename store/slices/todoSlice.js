import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    todos: [],
    status: null
}

const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        createTodo: (state, action) => {
            state.todos.push(action.payload);
        },
        updateTodo: (state, action) => {
            let item = state.todos.map((todo) => todo.id).findIndex(action.payload.id)
            state.todos[item] = action.payload
        },
        deleteTodo: (state, action) => {
            let item = state.todos.map((todo) => todo.id).findIndex(action.payload.id)
            state.todos.splice(item, 1)
        },
        toggleTodo: (state, action) => {
            let item = state.todos.map((todo) => todo.id).findIndex(action.payload.id)
            state.todos[item].status = !state.todos[item].status
        }
    }
})

export const { createTodo, updateTodo, deleteTodo, toggleTodo } = todoSlice.actions

export default todoSlice.reducer

