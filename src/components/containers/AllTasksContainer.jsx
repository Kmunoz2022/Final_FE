import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchTasks, deleteTask } from '../../store/taskSlice';
import AllTasksView from '../views/AllTasksView';

const AllTasksContainer = () => {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.tasks);

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  const handleDeleteTask = (taskId) => {
    dispatch(deleteTask(taskId));
  };

  return (
    <AllTasksView
      tasks={tasks}
      onDelete={handleDeleteTask}
    />
  );
};

export default AllTasksContainer;
