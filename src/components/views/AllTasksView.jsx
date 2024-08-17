import { Link } from "react-router-dom";

function AllTasksView({ tasks, deleteTask }) {

  if (!tasks.length) {
    return (
      <>
        <Link to={`/`}><button>Back to Home</button></Link>
        <Link to={`/tasks/new`}><button>Add Task</button></Link>
        <div>There are no tasks.</div>
      </>
    );
  }
  return (
    <div id="bgview" style={{display: "flex", flexDirection: "column", padding: "8px", minWidth: "500px"}} >
      <Link to={`/`}><button style={{margin: "8px"}}>Back to Home</button></Link>
      <Link to={`/tasks/new`}><button style={{margin: "8px"}}>Add Task</button></Link>
      <div style={ulStyle}>
        {tasks.map((todo, idx) => {
          let styleBool = idx === tasks.length - 1 ? liStyleLastChild : liStyle;
          return (
            <div key={todo.id} style={styleBool}>
              <h4>Task #{idx+1}: <Link to={`/tasks/${todo.id}`}>{todo.content}</Link></h4>
              <h5>Assigned to: Employee {todo.employeeId}</h5>
              <h5>{todo.completed ? "COMPLETED" : "IN PROGRESS"}</h5>
              <button onClick={() => deleteTask(todo.id)}>Delete</button>
            </div>
          );
        })}
      </div>
    </div>
  );

}

export default AllTasksView;