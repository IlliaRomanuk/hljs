import { configureStore } from '@reduxjs/toolkit'
import fetchItemsReducer from './slice'
 const store = configureStore({
  reducer: {
    table: fetchItemsReducer,
  },
})
export default store;
