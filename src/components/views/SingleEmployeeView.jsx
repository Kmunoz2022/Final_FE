import React from 'react';

const SingleEmployeeView = ({ employee, formData, setFormData, handleSubmit }) => {
  return (
    <div>
      <h1>Employee Details</h1>
      <p>Name: {employee.firstname} {employee.lastname}</p>
      <p>Department: {employee.department}</p>

      {/* Display list of tasks assigned to this employee */}
      <h2>Tasks Assigned</h2>
      {employee.tasks && employee.tasks.length > 0 ? (
        <ul>
          {employee.tasks.map(task => (
            <li key={task.id}>{task.content}</li>
          ))}
        </ul>
      ) : (
        <p>No tasks assigned to this employee.</p>
      )}

      <hr />
      <h3>Edit Employee Information</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="firstname">First Name:</label>
          <input
            type="text"
            id="firstname"
            value={formData.firstname}
            onChange={(e) => setFormData({ ...formData, firstname: e.target.value })}
          />
        </div>
        <div>
          <label htmlFor="lastname">Last Name:</label>
          <input
            type="text"
            id="lastname"
            value={formData.lastname}
            onChange={(e) => setFormData({ ...formData, lastname: e.target.value })}
          />
        </div>
        <div>
          <label htmlFor="department">Department:</label>
          <input
            type="text"
            id="department"
            value={formData.department}
            onChange={(e) => setFormData({ ...formData, department: e.target.value })}
          />
        </div>
        <button type="submit">Save Changes</button>
      </form>
    </div>
  );
};

export default SingleEmployeeView;
