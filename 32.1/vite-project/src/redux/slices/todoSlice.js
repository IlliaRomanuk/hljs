import { createSlice } from "@reduxjs/toolkit";
import API from "../../constants/constants";

const initialState = {
  items: [],
  isLoading: false,

  editingId: null,
};

export const todos = createSlice({
  name: "todos",
  initialState,
  reducers: {
    fetchStart: (state) => {
      state.isLoading = true;
    },
    fetchAdd: (state) => {
      state.isLoading = true;
    },
    deleteTodo: (state) => {
      state.isLoading = true;
    },
    checkTodoRequest: (state) => {
      state.isLoading = true;
    },
    addItem: (state, action) => {
      state.items.push(action.payload);
      state.isLoading = false;
    },
    fetchItems: (state, action) => {
      state.items = action.payload;
      state.isLoading = false;
    },
    deleteItem: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload.id);
      state.isLoading = false;
    },
    checkItem: (state, action) => {
      state.items = state.items.map((item) =>
        item.id === action.payload.id ? action.payload : item
      );
      state.isLoading = false;
    },

    editTodoStart: (state, action) => {
      state.editingId = action.payload;
    },

    editTodoCancel: (state) => {
      state.editingId = null;
    },

    editTodoSuccess: (state, action) => {
      state.items = state.items.map((item) =>
        item.id === action.payload.id ? action.payload : item
      );
      state.editingId = null;
      state.isLoading = false;
    },
    editTodoOpen: (state, action) => {
      state.editingId = action.payload;
    },
  },
});

export const {
  addItem,
  deleteItem,
  fetchItems,
  fetchStart,
  fetchAdd,
  deleteTodo,
  checkTodoRequest,
  checkItem,
  editTodoStart,
  editTodoCancel,
  editTodoSuccess,
  editTodoOpen,
} = todos.actions;

