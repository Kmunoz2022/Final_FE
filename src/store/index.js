import { configureStore } from '@reduxjs/toolkit';
import { tasksReducer } from './taskSlice';
import { employeesReducer } from './EmployeesSlice';

const store = configureStore({
  reducer: {
    tasks: tasksReducer,
    employees: employeesReducer,
  },
});

export default store;
