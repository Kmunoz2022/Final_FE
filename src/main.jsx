import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import store from "./store";
import App from "./App.jsx";
import Navbar from "./components/Navbar"; // Import the Navbar component
import AllEmployeesContainer from "./components/containers/allEmployeesContainer.jsx";
import AllTasksContainer from "./components/containers/AllTasksContainer";
import SingleTaskContainer from "./components/containers/SingleTaskContainer";
import EditTaskContainer from "./components/containers/EditTaskContainer";
import NewTaskContainer from "./components/containers/NewTaskContainer";
import SingleEmployeeContainer from "./components/containers/SingleEmployeeContainer";
import "./index.css";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function Main() {
  return (
    <Router>
      <Navbar /> 
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/employees" element={<AllEmployeesContainer />} />
        <Route path="/tasks" element={<AllTasksContainer />} />
        <Route path="/tasks/:taskId" element={<SingleTaskContainer />} />
        <Route path="/tasks/:taskId/edit" element={<EditTaskContainer />} />
        <Route path="/tasks/new" element={<NewTaskContainer />} />
        <Route path="/employees/:employeeId" element={<SingleEmployeeContainer />} />
      </Routes>
    </Router>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <Main />
    </Provider>
  </React.StrictMode>
);
