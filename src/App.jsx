import './App.css';
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="home">
      <header className="hero">
        <h1>Welcome to the Employee Management System</h1>
        <p>Manage your tasks and employees efficiently</p>
      </header>

      <div className="navigation-buttons">
        <Link to="/employees">
          <button className="nav-button">Manage Employees</button>
        </Link>
        <Link to="/tasks">
          <button className="nav-button">Manage Tasks</button>
        </Link>
      </div>
    </div>
  );
}

export default App;
