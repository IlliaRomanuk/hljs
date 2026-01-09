import { configureStore } from '@reduxjs/toolkit'
import Counter from "./slice"
 const store = configureStore({
  reducer: {
    counter: Counter.reducer
  },
})
export default store;
