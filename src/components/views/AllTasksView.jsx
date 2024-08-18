import React from 'react';
import { useNavigate } from 'react-router-dom';

const AllTasksView = ({ tasks, onDelete, handleSubmit, formData, setFormData, errors }) => {
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
            </li>
          ))}
        </ul>
      ) : (
        <p>No tasks found.</p>
      )}
      
      {/* Add New Task Form */}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="content"
          placeholder="Task Content"
          value={formData.content}
          onChange={(e) => setFormData({ ...formData, content: e.target.value })}
        />
        {errors.content && <span>{errors.content}</span>}
        <input
          type="text"
          name="priority"
          placeholder="Priority"
          value={formData.priority}
          onChange={(e) => setFormData({ ...formData, priority: e.target.value })}
        />
        {errors.priority && <span>{errors.priority}</span>}
        <button type="submit">Add Task</button>
      </form>

      {/* Go Back Button */}
      <button onClick={handleGoBack}>Go Back</button>
    </div>
  );
};

export default AllTasksView;
