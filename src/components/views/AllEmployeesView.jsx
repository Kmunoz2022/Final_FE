import React from 'react';
import { useNavigate } from 'react-router-dom';

const AllEmployeesView = ({ employees, onDelete }) => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate('/'); // Navigate to the home page or the main page you want
  };

  return (
    <div>
      <button onClick={handleBackClick}>Back to Home</button>
      {employees.length > 0 ? (
        <ul>
          {employees.map(employee => (
            <li key={employee.id}>
              {employee.firstname} {employee.lastname} - {employee.department}
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
