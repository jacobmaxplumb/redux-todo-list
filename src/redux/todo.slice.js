import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    text: '',
    todos: ['one item']
}

const slice = createSlice({
    name: 'todo-list',
    initialState: initialState,
    reducers: {
        updateText: (state, action) => {
            state.text = action.payload
        },
        addTodo: (state) => {
            state.todos = [...state.todos, state.text];
            state.text = ''
        }
    }
})

export default slice.reducer;

export const { updateText, addTodo } = slice.actions;