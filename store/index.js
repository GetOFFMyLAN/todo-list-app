import { configureStore } from "@reduxjs/toolkit"
import { todoReducer } from './slices'

export function makeStore() {
    return configureStore({
        reducer: { 
            todoReducer
        },
    })
}

const store = makeStore()

export default store