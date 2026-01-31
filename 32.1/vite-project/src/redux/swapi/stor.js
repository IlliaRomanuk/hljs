import { configureStore } from '@reduxjs/toolkit'
import fetchItemsReducer from './slice'
 const store = configureStore({
  reducer: {
    todos: fetchItemsReducer,
  },
})
export default store;
