import { createSlice } from '@reduxjs/toolkit'

const todoSlice = createSlice({
    name: 'todo',
    initialState: [],
    reducers: {
        addTodo(state, action) {},
        updateTodo(state, action) {},
        deleteTodo(state, action) {},
        completeTodo(state, action) {}
    }
})

export const { addTodo, updateTodo, deleteTodo, completeTodo } = todoSlice.actions

export default todoSlice.reducer

