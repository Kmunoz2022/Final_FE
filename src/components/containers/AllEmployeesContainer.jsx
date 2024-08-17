import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchEmployees } from "../../store/EmployeesSlice";
import AllEmployeesView from "../views/AllEmployeesView";
import { useEffect } from "react";
import { addEmployee } from "../../store/EmployeesSlice";
import { deleteEmployee } from "../../store/EmployeesSlice";

const AllEmployeesContainer = () => {
    const dispatch = useDispatch();
    const employees = useSelector((state) => state.employees);
    const [newEmployee, setNewEmployee] = useState({
      firstname: "",
      lastname: "",
      department: ""
    });
  
    useEffect(() => {
      dispatch(fetchEmployees());
    }, [dispatch]);
  
    const handleDelete = (id) => {
      dispatch(deleteEmployee(id));
    };
  
    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setNewEmployee({
        ...newEmployee,
        [name]: value
      });
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      dispatch(addEmployee(newEmployee));
      setNewEmployee({ firstname: "", lastname: "", department: "" });
    };
  
    return (
      <div>
        <AllEmployeesView employees={employees} onDelete={handleDelete} />
        <h2>Add New Employee</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="firstname"
            value={newEmployee.firstname}
            onChange={handleInputChange}
            placeholder="First Name"
          />
          <input
            type="text"
            name="lastname"
            value={newEmployee.lastname}
            onChange={handleInputChange}
            placeholder="Last Name"
          />
          <input
            type="text"
            name="department"
            value={newEmployee.department}
            onChange={handleInputChange}
            placeholder="Department"
          />
          <button type="submit">Add Employee</button>
        </form>
      </div>
    );
  };
  
  export default AllEmployeesContainer;