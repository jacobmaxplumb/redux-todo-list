import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    text: '',
    todos: ['one item']
}

const slice = createSlice({
    name: 'todo-list',
    initialState: initialState,
    reducers: {}
})

export default slice.reducer;