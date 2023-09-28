import React, { useState } from "react";
import "./App.css";
import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Complete React Tutorial",
      description: "Learn React from scratch.",
      isDone: false,
    },
    {
      id: 2,
      title: "Build Task Tracker",
      description: "Create a task tracking app with React.",
      isDone: false,
    },
  ]);

  function addTask(title, description) {
    const newTask = {
      id: tasks.length + 1,
      title,
      description,
      isDone: false,
    };
    setTasks((prevTasks) => [...prevTasks, newTask]);
  }

  function deleteTask(taskId) {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
  }

  function updateTask(updatedTask) {
    const updatedTasks = tasks.map((task) =>
      task.id === updatedTask.id ? updatedTask : task
    );
    setTasks(updatedTasks);
  }

  return (
    <div className="App">
      <main>
        <h1 className="app-title">My Task Tracker</h1>
        <h2>Today's Tasks</h2>
        <TaskForm onAdd={addTask} />
        <TaskList
          tasks={tasks}
          onDeleteTask={deleteTask}
          onUpdateTask={updateTask}
        />
      </main>
    </div>
  );
}

export default App;
