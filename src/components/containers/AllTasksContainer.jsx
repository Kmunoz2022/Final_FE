import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchTasks, addTask, deleteTask } from '../../store/taskSlice';
import AllTasksView from '../views/AllTasksView';

const AllTasksContainer = () => {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.tasks);
  
  const [formData, setFormData] = useState({
    content: '',
    priority: '',
  });

  const [errors, setErrors] = useState({});

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  const validateForm = () => {
    const newErrors = {};
    if (!formData.content) newErrors.content = 'Content is required';
    if (!formData.priority) newErrors.priority = 'Priority is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleAddTask = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      const result = await dispatch(addTask(formData));
      if (result) {
        setFormData({ content: '', priority: '' });
      }
    }
  };

  const handleDeleteTask = (taskId) => {
    dispatch(deleteTask(taskId));
  };

  return (
    <AllTasksView
      tasks={tasks}
      onDelete={handleDeleteTask}
      handleSubmit={handleAddTask}
      formData={formData}
      setFormData={setFormData}
      errors={errors}
    />
  );
};

export default AllTasksContainer;
