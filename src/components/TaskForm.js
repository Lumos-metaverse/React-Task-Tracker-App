import React, { useState } from "react";

function TaskForm({ onAdd }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  function handleAddTask() {
    if (title && description) {
      onAdd(title, description);
      setTitle("");
      setDescription("");
    } else {
      alert("Please fill out both title and description!");
    }
  }

  return (
    <div>
      <label>
        Task Title:
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </label>
      <label>
        Task Description:
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </label>
      <br />
      <button onClick={handleAddTask}>Add Task</button>
    </div>
  );
}

export default TaskForm;
