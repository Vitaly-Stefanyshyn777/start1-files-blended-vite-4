import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice ({
    name: 'todo',
    initialState: {items: [], isLoading: false, error: null},
    reducers: {}
})