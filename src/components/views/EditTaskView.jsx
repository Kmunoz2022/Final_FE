import React from 'react';

const EditTaskView = ({ formData, setFormData, handleSubmit, employees }) => {
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  return (
    <div>
      <h1>Edit Task</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Content:</label>
          <input
            type="text"
            name="content"
            value={formData.content}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Priority:</label>
          <select
            name="priority"
            value={formData.priority}
            onChange={handleChange}
          >
            <option value="1">Low</option>
            <option value="2">Medium</option>
            <option value="3">High</option>
          </select>
        </div>
        <div>
          <label>Completed:</label>
          <input
            type="checkbox"
            name="completed"
            checked={formData.completed}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Assign to Employee:</label>
          <select
            name="employeeId"
            value={formData.employeeId || ''}
            onChange={handleChange}
          >
            <option value="">Unassigned</option>
            {employees.map(employee => (
              <option key={employee.id} value={employee.id}>
                {employee.firstname} {employee.lastname}
              </option>
            ))}
          </select>
        </div>
        <button type="submit">Save Changes</button>
      </form>
    </div>
  );
};

export default EditTaskView;
