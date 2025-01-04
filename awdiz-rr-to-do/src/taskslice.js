import { createSlice } from '@reduxjs/toolkit';

// Create the task slice
const taskSlice = createSlice({
  name: 'tasks', 
  initialState: {
    tasks: [], 
  },
  reducers: {
    addTask: (state, action) => {
      state.tasks.push({
        id: Date.now(), 
        text: action.payload, 
        completed: false,
      });
    },
    toggleTaskCompletion: (state, action) => {
      const task = state.tasks.find(task => task.id === action.payload);
      if (task) {
        task.completed = !task.completed;  // Toggle the completion status
      }
    },
  },
});

// Export the actions for use in components
export const { addTask, toggleTaskCompletion } = taskSlice.actions;

// Export the reducer to be used in the store
export default taskSlice.reducer;
