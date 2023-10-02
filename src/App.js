import React, { useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom"
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Nav from "./components/Nav";

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
      <Nav />
      <Routes>
      <Route 
          path="/" 
          element={<Home 
                     tasks={tasks} 
                     onAdd={addTask} 
                     onDeleteTask={deleteTask} 
                     onUpdateTask={updateTask}
                   />} 
        />
        <Route path="about" element={ <About/> } />
        <Route path="contact" element={ <Contact/> } />
      </Routes>
      
    </div>
  );
}

export default App;
