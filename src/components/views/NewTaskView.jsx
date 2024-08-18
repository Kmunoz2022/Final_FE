import React from 'react';
import { useNavigate } from 'react-router-dom';

const NewTaskView = ({ formData, setFormData, handleSubmit, errors }) => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1); 
  };

  return (
    <div>
      <h1>Add New Task</h1>
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

      <button onClick={handleGoBack}>Go Back</button>
    </div>
  );
};

export default NewTaskView;
