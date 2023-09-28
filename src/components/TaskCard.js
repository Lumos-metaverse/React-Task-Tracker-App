import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

function TaskCard({ task, onDelete, onUpdate }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(task.title);
  const [editedDescription, setEditedDescription] = useState(task.description);

  useEffect(() => {
    // If the task title or description changes externally (e.g., from a parent component), update the edited values
    setEditedTitle(task.title);
    setEditedDescription(task.description);
  }, [task]);

  function handleButtonClick() {
    setIsEditing((prevIsEditing) => !prevIsEditing);
  }

  function handleSaveClick() {
    // Update the task with editedTitle and editedDescription
    onUpdate({
      ...task,
      title: editedTitle,
      description: editedDescription,
    });
    setIsEditing(false);
  }

  return (
    <div>
      {isEditing ? (
        <div>
          <input
            type="text"
            value={editedTitle}
            onChange={(e) => setEditedTitle(e.target.value)}
          />
          <input
            type="text"
            value={editedDescription}
            onChange={(e) => setEditedDescription(e.target.value)}
          />
          <button onClick={handleSaveClick}>Save</button>
        </div>
      ) : (
        <div>
          <h3 style={{ textDecoration: task.isDone ? "line-through" : "none" }}>
            {task.title}
            <p>{task.description}</p>
          </h3>
          <button className="edit-button" onClick={handleButtonClick}>
            Edit
          </button>
          <button className="delete-button" onClick={() => onDelete(task.id)}>
            Delete
          </button>
          <button
            className={`mark-button ${task.isDone ? "undone" : "done"}`}
            onClick={() => onUpdate({ ...task, isDone: !task.isDone })}
          >
            {task.isDone ? "Mark as Undone" : "Mark as Done"}
          </button>
        </div>
      )}
    </div>
  );
}

TaskCard.propTypes = {
  task: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
    isDone: PropTypes.bool.isRequired,
  }).isRequired,
  onDelete: PropTypes.func.isRequired,
  onUpdate: PropTypes.func.isRequired,
};

export default TaskCard;
