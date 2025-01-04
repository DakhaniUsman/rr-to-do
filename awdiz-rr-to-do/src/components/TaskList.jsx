import React, { useState, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleTaskCompletion } from "../taskslice"; // Import toggleTaskCompletion action

const TaskList = () => {
  const tasks = useSelector((state) => state.tasks); // Access tasks from Redux state
  const dispatch = useDispatch();

  // Add a state to track the current filter ("All", "Completed", "Incomplete")
  const [filter, setFilter] = useState("All");

  // Use useMemo to derive the filtered task list based on the current filter
  const filteredTasks = useMemo(() => {
    switch (filter) {
      case "Completed":
        return tasks.filter((task) => task.completed === true);
      case "Incomplete":
        return tasks.filter((task) => task.completed === false);
      default:
        return tasks; // "All" filter, no change
    }
  }, [tasks, filter]); // Re-run when tasks or filter changes

  const handleToggle = (id) => {
    dispatch(toggleTaskCompletion(id)); // Dispatch action to toggle completion
  };

  return (
    <div>
      {/* Filter Buttons */}
      <div>
        <button onClick={() => setFilter("All")}>All</button>
        <button onClick={() => setFilter("Completed")}>Completed</button>
        <button onClick={() => setFilter("Incomplete")}>Incomplete</button>
      </div>

      {/* Task List */}
      {filteredTasks.map((task) => (
        <div key={task.id}>
          <span
            style={{
              textDecoration: task.completed ? "line-through" : "none",
              color : task.completed ? "grey" :"black",

            }}
          >
            {task.text}
          </span>
          <button onClick={() => handleToggle(task.id)}>
            {task.completed ? "Mark Incomplete" : "Mark Complete"}
          </button>
        </div>
      ))}
    </div>
  );
};

export default TaskList;
