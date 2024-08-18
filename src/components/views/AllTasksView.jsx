import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const AllTasksView = ({ tasks, onDelete }) => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1); 
  };

  return (
    <div>
      <h1>All Tasks</h1>
      {tasks.length > 0 ? (
        <ul>
          {tasks.map(task => (
            <li key={task.id}>
              {task.content} - {task.priority} - {task.completed ? "Completed" : "Pending"}
              <button onClick={() => onDelete(task.id)}>Delete</button>
              <Link to={`/tasks/${task.id}`}>Edit</Link> {/* Link to edit the task */}
            </li>
          ))}
        </ul>
      ) : (
        <p>No tasks found.</p>
      )}

      {/* Link to Add New Task */}
      <Link to="/tasks/new">Add New Task</Link>

      {/* Go Back Button */}
      <Link to={`/`}><button>Home</button></Link>
    </div>
  );
};

export default AllTasksView;
