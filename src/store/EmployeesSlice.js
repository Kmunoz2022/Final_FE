import axios from 'axios';

const initialState = [];

// Reducer
export function employeesReducer(state = initialState, action) {
  switch (action.type) {
    case 'employees/employeesLoaded':
      return action.payload;
    case 'employees/employeeDeleted':
      return state.filter(employee => employee.id !== action.payload);
    case 'employees/employeeCreated':
      return [...state, action.payload];
    case 'employees/employeeUpdated':
      return state.map(employee => 
        employee.id === action.payload.id ? action.payload : employee
      );
    default:
      return state;
  }
}

const PATH = 'http://localhost:5001/api/employees';

// Thunks

/** FETCH ALL EMPLOYEES */
export const fetchEmployees = () => async (dispatch) => {
  try {
    const res = await axios.get(PATH);
    dispatch({ type: 'employees/employeesLoaded', payload: res.data });
  } catch (err) {
    console.error('Failed to fetch employees:', err);
  }
};

/** DELETE AN EMPLOYEE */
export const deleteEmployee = (employeeId) => async (dispatch) => {
  try {
    await axios.delete(`${PATH}/${employeeId}`);
    dispatch({ type: 'employees/employeeDeleted', payload: employeeId });
  } catch (err) {
    console.error('Failed to delete employee:', err);
  }
};

/** ADD A NEW EMPLOYEE */
export const addEmployee = (employee) => async (dispatch) => {
  try {
    const res = await axios.post(PATH, employee);
    dispatch({ type: 'employees/employeeCreated', payload: res.data });
    return res.data;
  } catch (err) {
    console.error('Failed to add employee:', err);
    return null;
  }
};

/** EDIT AN EMPLOYEE */
export const editEmployee = (employee) => async (dispatch) => {
  try {
    const res = await axios.put(`${PATH}/${employee.id}`, employee);
    dispatch({ type: 'employees/employeeUpdated', payload: res.data });
  } catch (err) {
    console.error('Failed to edit employee:', err);
  }
};
