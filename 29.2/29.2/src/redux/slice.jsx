import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    items: [],
  }
  
  export const todosSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
      add: (state, action) => {
        state.items.push(action.payload)
      },
    },
  })
  export const { add } = todosSlice.actions;
  export default todosSlice.reducer