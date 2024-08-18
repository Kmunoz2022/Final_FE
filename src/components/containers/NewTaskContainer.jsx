import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../../store/taskSlice';
import NewTaskView from '../views/NewTaskView';

const NewTaskContainer = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    content: '',
    priority: 1,
  });
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    if (!formData.content) newErrors.content = 'Content is required';
    if (!formData.priority) newErrors.priority = 'Priority is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      const result = await dispatch(addTask(formData));
      if (result) {
        setFormData({ content: '', priority: 1 });
      }
    }
  };

  return (
    <NewTaskView
      formData={formData}
      setFormData={setFormData}
      errors={errors}
      handleSubmit={handleSubmit}
    />
  );
};

export default NewTaskContainer;
