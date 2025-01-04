import "./App.css";
import AddTask from "./components/AddTask";
import TaskList from "./components/TaskList";
import { useTheme } from "./components/ThemeContext";
import ThemeToggleButton from "./components/ThemeToggleButton";

function App() {
  const { theme } = useTheme();

  return (
    <div className={theme}>
      <div className="App">
        {" "}
        {/* Apply the theme class */}
        <div className="to-do-container">
          <ThemeToggleButton /> {/* Add the toggle button */}
          <AddTask />
          <TaskList />
        </div>
      </div>
    </div>
  );
}

export default App;
