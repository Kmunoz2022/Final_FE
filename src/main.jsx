import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import store from "./store";
import App from "./App.jsx";
import AllEmployeesContainer from "./components/containers/allEmployeesContainer.jsx";
import AllTasksContainer from "./components/containers/AllTasksContainer.jsx";
import SingleTaskContainer from "./components/containers/SingleTaskContainer.jsx";
import EditTaskContainer from "./components/containers/EditTaskContainer.jsx";
import NewTaskContainer from "./components/containers/NewTaskContainer.jsx";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/employees",
    element: <AllEmployeesContainer />,
  },
  {
    path: "/tasks",
    element: <AllTasksContainer />,
  },
  {
    path: "/tasks/:taskId",
    element: <SingleTaskContainer />,
  },
  {
    path: "/tasks/:taskId/edit",
    element: <EditTaskContainer />,
  },
  {
    path: "/tasks/new",
    element: <NewTaskContainer />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
