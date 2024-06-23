// src/store/store.js
import { configureStore, createSlice } from '@reduxjs/toolkit';

// Initial state
const initialState = {
  todos: []
};

// Create a slice of the store
const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todos.push({ text: action.payload, done: false });
    },
    toggleTodo: (state, action) => {
      const todo = state.todos[action.payload];
      if (todo) {
        todo.done = !todo.done;
      }
    }
  }
});

// Export actions
export const { addTodo, toggleTodo } = todosSlice.actions;

// Create store
const store = configureStore({
  reducer: {
    todos: todosSlice.reducer
  }
});

export default store;
