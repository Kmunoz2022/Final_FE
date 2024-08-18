import { useParams, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from 'react';
import { fetchTasks, editTask } from '../../store/taskSlice';
import { fetchEmployees } from '../../store/EmployeesSlice';
import EditTaskView from '../views/EditTaskView';

function EditTaskContainer() {
  const { taskId } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    
    dispatch(fetchTasks());  // Ensure tasks are loaded
    dispatch(fetchEmployees());
  }, [dispatch]);

  const task = useSelector(state =>
    state.tasks.find(task => task.id === parseInt(taskId))
  );

  const employees = useSelector((state) => state.employees);

  const [formData, setFormData] = useState({
    content: task?.content || '',
    priority: task?.priority || 1,
    completed: task?.completed || false,
    employeeId: task?.employeeId || null,
  });

  useEffect(() => {
    if (task) {
      setFormData({
        content: task.content,
        priority: task.priority,
        completed: task.completed,
        employeeId: task.employeeId,
      });
    }
  }, [task]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const updates = {
      ...task,
      content: formData.content,
      priority: parseInt(formData.priority, 10),
      completed: formData.completed,
      employeeId: formData.employeeId ? parseInt(formData.employeeId, 10) : null,
    };

    dispatch(editTask(updates));

    alert("Task updated!");
    navigate(`/tasks`);
  };

  return <EditTaskView formData={formData} setFormData={setFormData} employees={employees} handleSubmit={handleSubmit} />;
}

export default EditTaskContainer;
