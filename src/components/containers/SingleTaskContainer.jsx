import { useParams, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import SingleTaskView from '../views/SingleTaskView';
import { editTask } from '../../store/taskSlice';

function SingleTaskContainer() {
  let { taskId } = useParams(); 
  taskId = parseInt(taskId); 

  const dispatch = useDispatch();
  const navigate = useNavigate();


  const task = useSelector(state =>
    state.tasks.find(task => task.id === taskId)
  );


  const employees = useSelector(state => state.employees);

  const handleSubmit = (updatedTask) => {
    dispatch(editTask({ ...updatedTask, id: taskId }));
    navigate(`/tasks`);
  };

  return <SingleTaskView task={task} employees={employees} handleSubmit={handleSubmit} />;
}

export default SingleTaskContainer;
