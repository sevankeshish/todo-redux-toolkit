import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

//async actions
//getodos, addTodos, toggleTodos, removeTodos

const api = axios.create({
  baseURL: "http://localhost:5000",
});

//async actions
export const getAsyncTodos = createAsyncThunk(
  "todos/getAsyncTodos",
  async (_, { rejectWithValue }) => {
    try {
      const response = await api.get("/todos");
      return response.data;
    } catch (error) {
      rejectWithValue(error.message);
    }
  }
);

const todoSlice = createSlice({
  name: "todos",
  initialState: {
    todos: [],
    loading: false,
    error: "",
  },
  //local states
  reducers: {
    addTodo: (state, action) => {
      const newTodo = {
        id: Date.now(),
        title: action.payload.title,
        completed: false,
      };
      state.todos.push(newTodo);
    },
    toggleTodo: (state, action) => {
      const selectedTodo = state.todos.find(
        (todo) => todo.id === Number(action.payload.id)
      );
      if (selectedTodo) {
        selectedTodo.completed = !selectedTodo.completed;
      }
    },
    deleteTodo: (state, action) => {
      state.todos = state.todos.filter(
        (todo) => todo.id !== Number(action.payload.id)
      );
    },
  },
  //remote states
  extraReducers: (builder) => {
    builder
      .addCase(getAsyncTodos.pending, (state) => {
        state.loading = true;
        state.error = "";
      })
      .addCase(getAsyncTodos.fulfilled, (state, action) => {
        state.loading = false;
        state.todos = action.payload;
        state.error = "";
      })
      .addCase(getAsyncTodos.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.todos = [];
      });
  },
});

export const { addTodo, toggleTodo, deleteTodo } = todoSlice.actions;

export default todoSlice.reducer;
