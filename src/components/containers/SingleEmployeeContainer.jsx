import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { fetchEmployees, editEmployee } from '../../store/employeesSlice';
import SingleEmployeeView from '../views/SingleEmployeeView';

const SingleEmployeeContainer = () => {
  const { employeeId } = useParams();
  const navigate = useNavigate(); 
  const dispatch = useDispatch();

  const employee = useSelector((state) =>
    state.employees.find((employee) => employee.id === parseInt(employeeId))
  );

  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    department: '',
  });

  useEffect(() => {
    if (employee) {
      setFormData({
        firstname: employee.firstname,
        lastname: employee.lastname,
        department: employee.department,
      });
    } else {
      dispatch(fetchEmployees()); 
    }
  }, [dispatch, employee, employeeId]);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const updatedEmployee = {
      ...employee,
      ...formData,
    };
    await dispatch(editEmployee(updatedEmployee));
    navigate('/employees'); 
  };

  if (!employee) {
    return <div>Loading...</div>; 
  }

  return (
    <SingleEmployeeView
      employee={employee}
      formData={formData}
      setFormData={setFormData}
      handleSubmit={handleFormSubmit}
    />
  );
};

export default SingleEmployeeContainer;
