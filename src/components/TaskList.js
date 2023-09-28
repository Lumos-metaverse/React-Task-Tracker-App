import React from "react";
import TaskCard from "./TaskCard";

function TaskList({ tasks, onDeleteTask, onUpdateTask }) {
  return (
    <div className="task-list">
      {tasks.map((task) => (
        <TaskCard
          key={task.id}
          task={task}
          onDelete={onDeleteTask}
          onUpdate={onUpdateTask}
        />
      ))}
    </div>
  );
}

export default TaskList;
