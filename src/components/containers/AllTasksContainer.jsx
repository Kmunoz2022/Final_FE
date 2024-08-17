import AllTasksView from "../views/AllTasksView";

function AllTasksContainer() {
    let tasks = [{id: 34278, title: "Job A"}, {id: 10957, title: "Job B"}];
    return (
       <AllTasksView tasks={tasks} />
    );

}

export default AllTasksContainer;