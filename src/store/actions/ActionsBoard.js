import axios from '../../axios';
import { LOAD_TASK, LOAD_TASK_SUCCESS } from './ActionTypes';

export const loadTask = () => ({
  type: LOAD_TASK,
});

export const loadTaskSuccess = data => ({
  type: LOAD_TASK_SUCCESS,
  tasks: data,
});

export function loadTasks() {
  return function (dispatch) {
    dispatch(loadTask());
    return axios.get('/tasks')
      .then(data => dispatch(loadTaskSuccess(data.data)));
  };
};
