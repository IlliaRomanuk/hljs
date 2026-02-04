import { configureStore } from "@reduxjs/toolkit";
import { todos } from "./slices/todoSlice";
import logger from "redux-logger";
import rootSaga from "./saga";
import createSagaMiddleware from "redux-saga";
export const sagaMiddleware = createSagaMiddleware();
export const store = configureStore({
  reducer: {
    todos: todos.reducer,
  },
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware(),
    logger,
    sagaMiddleware,
  ],
});
sagaMiddleware.run(rootSaga);
