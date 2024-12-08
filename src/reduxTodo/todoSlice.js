import { createSlice } from '@reduxjs/toolkit';

export const todoSlice = createSlice({
  name: 'todo',
  initialState: { items: [], isLoading: false, error: null, filter: '' },
  reducers: {
    addTodo: (state, action) => {
      state.items.push(action.payload);
    },
    deleteTodo: (state, action) => {
      state.items = state.items.filter(todo => todo.id !== action.payload);
    },
    setFilter: (state, action) => {
     state.filter = action.payload;
    }
  },
});

export const { addTodo, deleteTodo, setFilter } = todoSlice.actions;
