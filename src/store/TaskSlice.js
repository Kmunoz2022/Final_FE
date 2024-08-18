import axios from 'axios';

const initialState = [];

export function tasksReducer(state = initialState, action) {
  switch (action.type) {
    case 'tasks/tasksLoaded':
      return action.payload;
    case 'tasks/taskDeleted':
      return state.filter(task => task.id !== action.payload);
    case 'tasks/taskCreated':
      return [...state, action.payload];
    case 'tasks/taskUpdated':
      return state.map(task => 
        task.id === action.payload.id ? action.payload : task
      );
    default:
      return state;
  }
}

const PATH = 'http://localhost:5001/api/tasks'; // Correct API path

export const fetchTasks = () => async (dispatch) => {
  try {
    let res = await axios.get(`${PATH}`);
    dispatch({type: 'tasks/tasksLoaded', payload: res.data});
  } catch (err) {
    console.error('Failed to fetch tasks:', err);
  }
};

export const deleteTask = taskId => async dispatch => {
  try {
    await axios.delete(`${PATH}/${taskId}`);
    dispatch({type: 'tasks/taskDeleted', payload: taskId});
  } catch (err) {
    console.error('Failed to delete task:', err);
  }
};

export const addTask = task => async (dispatch) => {
  try {
    let res = await axios.post(`${PATH}`, task);
    dispatch({type: 'tasks/taskCreated', payload: res.data});
    return res.data;
  } catch (err) {
    console.error('Failed to add task:', err);
    return null;
  }
};

export const editTask = task => async dispatch => {
  try {
    let res = await axios.put(`${PATH}/${task.id}`, task);
    dispatch({type: 'tasks/taskUpdated', payload: res.data});
  } catch (err) {
    console.error('Failed to edit task:', err);
  }
};
