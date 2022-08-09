import { configureStore } from "@reduxjs/toolkit"
import { todoReducer } from './slices'

export function makeStore() {
    return configureStore({
        reducer: { 
            todolist: todoReducer
        },
    })
}

const store = makeStore()

export default store