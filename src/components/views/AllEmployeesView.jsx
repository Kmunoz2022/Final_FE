import React from 'react';


const AllEmployeesView = ({ employees, onDelete }) => {
    if (!employees.length) {
      return <p>No employees found.</p>;
    }
  
    return (
      <div>
        <h2>All Employees</h2>
        <ul>
          {employees.map((employee) => (
            <li key={employee.id}>
              {employee.firstname} {employee.lastname} - {employee.department}
              <button onClick={() => onDelete(employee.id)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default AllEmployeesView;