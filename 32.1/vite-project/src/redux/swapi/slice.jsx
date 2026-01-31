import { createSlice } from '@reduxjs/toolkit'

 export const initialState = {
    items: [],
  }
  
  export const todosSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        fetchItems: (state, actions) => {
            state.items = actions.payload;
        },
        clean: (state) => {
          state.items = [];
        }
    },
  })
  export const { fetchItems, clean } = todosSlice.actions;
  export default todosSlice.reducer
  export const getInfo = (url) => async (dispatch) =>{
    try {
        const response = await fetch(url);
        const responseInfo = await response.json();
        dispatch(fetchItems(responseInfo))
        // console.log("responceInfo", responseInfo);
      } catch (error) {
        console.log("error", error);
      }
  };