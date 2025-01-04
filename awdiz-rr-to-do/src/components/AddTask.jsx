import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../taskslice"; // Import addTask action from slice
import "./AddTask.css"

const AddTask = () => {
  const [task, setTask] = useState("");
  const dispatch = useDispatch();

  const handleAddTask = () => {
    if (task.trim()) {
      dispatch(addTask(task)); // Dispatch the addTask action with the entered task
      setTask(""); // Clear the input field after adding
    }
  };

  return (
    <div className="add-task-container">
      <input
        type="text"
        value={task}
        placeholder="Enter your to do"
        onChange={(e) => setTask(e.target.value)} // Update state on input change
      />
      <button className="add-btn" onClick={handleAddTask}>
        +
      </button>
    </div>
  );
};

export default AddTask;
