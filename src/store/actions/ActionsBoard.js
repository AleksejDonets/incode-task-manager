import axios from '../../axios';
import { LOAD_ALL_TASK, LOAD_ALL_TASK_SUCCESS, LOAD_ALL_TASK_ERROR } from './ActionTypes';

export const loadTask = () => ({
  type: LOAD_ALL_TASK,
  isLoading: false,
});

export const loadTaskSuccess = data => ({
  type: LOAD_ALL_TASK_SUCCESS,
  tasks: data,
  isLoading: true,
});

export const loadAllTaskError = error => ({
  type:LOAD_ALL_TASK_ERROR,
  error
})
export function loadAllTasks() {
  return function (dispatch) {
    dispatch(loadTask());
    return axios.get('/tasks')
      .then(data => dispatch(loadTaskSuccess(data.data)));
  };
};
