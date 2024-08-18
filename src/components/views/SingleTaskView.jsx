import { Link } from "react-router-dom";
import { useState } from "react";

function SingleTaskView({ task, employees, handleSubmit }) {
  const [formData, setFormData] = useState({
    content: task?.content || '',
    priority: task?.priority || 1,
    employeeId: task?.employee ? task.employee.id : '',
  });

  if (!task) {
    return (
      <section>
        <h2>Task not found!</h2>
      </section>
    );
  }

  let priorities = ["Low", "Medium", "High"];
  let employeeAssigned = task.employee ? 
    <Link to={`../employees/${task.employee.id}`}>{task.employee.firstname + " " + task.employee.lastname}</Link> 
    : "Unassigned";

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const validateForm = () => {
    if (formData.content.trim() === '') {
      alert("Task content cannot be empty");
      return false;
    }
    return true;
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      handleSubmit(formData);
    }
  };

  return (
    <div>
      <Link to="../tasks">Back to all tasks</Link>
      <section>
        <article>
          <h2>{task.content}</h2>
          <p>Priority: {priorities[task.priority - 1]}</p>
          <p>Assigned to: {employeeAssigned}</p>
        </article>
      </section>
      <hr/>
      <h3>Edit task information</h3>
      <form onSubmit={handleFormSubmit}>
        <div>
          <label htmlFor="content">Content:</label>
          <input 
            type="text" 
            name="content" 
            value={formData.content} 
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="priority">Priority:</label>
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
          <label htmlFor="employeeId">Assign to Employee:</label>
          <select 
            name="employeeId" 
            value={formData.employeeId} 
            onChange={handleChange}
          >
            <option value="">Unassigned</option>
            {employees.map((employee) => (
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
}

export default SingleTaskView;
