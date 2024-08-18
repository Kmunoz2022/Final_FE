import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchEmployees, addEmployee, deleteEmployee } from "../../store/EmployeesSlice";
import AllEmployeesView from '../views/AllEmployeesView';

function AllEmployeesContainer() {
  const employees = useSelector((state) => state.employees);
  const dispatch = useDispatch();
  const [newEmployee, setNewEmployee] = useState({ firstname: '', lastname: '', department: '' });

  useEffect(() => {
    dispatch(fetchEmployees());
  }, [dispatch]);

  const handleAddEmployee = async (event) => {
    event.preventDefault();
    const result = await dispatch(addEmployee(newEmployee));
    if (result) {
      console.log('Employee added:', result);
      setNewEmployee({ firstname: '', lastname: '', department: '' }); 
    } else {
      console.error('Failed to add employee');
    }
  };

  const handleDeleteEmployee = (id) => {
    dispatch(deleteEmployee(id));
  };

  return (
    <div>
      <AllEmployeesView employees={employees} onDelete={handleDeleteEmployee} />
      <form onSubmit={handleAddEmployee}>
        <input 
          type="text" 
          placeholder="First Name" 
          value={newEmployee.firstname} 
          onChange={(e) => setNewEmployee({ ...newEmployee, firstname: e.target.value })} 
        />
        <input 
          type="text" 
          placeholder="Last Name" 
          value={newEmployee.lastname} 
          onChange={(e) => setNewEmployee({ ...newEmployee, lastname: e.target.value })} 
        />
        <input 
          type="text" 
          placeholder="Department" 
          value={newEmployee.department} 
          onChange={(e) => setNewEmployee({ ...newEmployee, department: e.target.value })} 
        />
        <button type="submit">Add Employee</button>
      </form>
    </div>
  );
}

export default AllEmployeesContainer;