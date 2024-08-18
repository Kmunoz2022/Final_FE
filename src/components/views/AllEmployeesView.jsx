import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const AllEmployeesView = ({ employees, onDelete }) => {
  return (
    <div>
      <h1>All Employees</h1>
      {employees.length > 0 ? (
        <ul>
          {employees.map(employee => (
            <li key={employee.id}>
              <Link to={`/employees/${employee.id}`}>
                {employee.firstname} {employee.lastname} - {employee.department}
              </Link>
              <button onClick={() => onDelete(employee.id)}>Delete</button>
            </li>
          ))}
        </ul>
      ) : (
        <p>No employees found.</p>
      )}
    </div>
  );
};

export default AllEmployeesView;
