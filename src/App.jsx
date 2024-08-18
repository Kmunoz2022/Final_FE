import './App.css';
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="home">
      <h1>WELCOME</h1>
      <Link to={`employees`}><button>All Employees</button></Link>
      <Link to={`tasks`}><button>All Tasks</button></Link>
      <Link to={`tasks/new`}><button>Add New Task</button></Link>
    </div>
  );
}

export default App;