import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const AllTasksView = ({ tasks, onDelete }) => {
  return (
    <div>
      <h1>All Tasks</h1>
      {tasks.length > 0 ? (
        <ul>
          {tasks.map(task => (
            <li key={task.id}>
              <Link to={`/tasks/${task.id}`}>{task.content} - {task.priority}</Link>
              <button onClick={() => onDelete(task.id)}>X</button>
            </li>
          ))}
        </ul>
      ) : (
        <p>No tasks found.</p>
      )}

      <Link to="/tasks/new">Add New Task</Link>
    </div>
  );
};

export default AllTasksView;
