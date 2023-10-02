import React from 'react';
import TaskForm from './TaskForm';
import TaskList from './TaskList';

function Home({ tasks, onAdd, onDeleteTask, onUpdateTask }) {
    return (
    <main>
      <h1 className="app-title">My Task Tracker</h1>
      <h2>Today's Tasks</h2>
      <TaskForm onAdd={onAdd} />
      <TaskList
        tasks={tasks}
        onDeleteTask={onDeleteTask}
        onUpdateTask={onUpdateTask}
      />
    </main>
  );
}


export default Home;