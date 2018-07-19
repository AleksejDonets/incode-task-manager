import axios from '../../axios';
import { LOAD_TASK, LOAD_TASK_SUCCESS, LOAD_ACTIVE_TASK, CHANGE_TASK_STATUS } from './ActionTypes';

export const loadTask = () => ({
  type: LOAD_TASK,
});

export const loadTaskSuccess = data => ({
  type: LOAD_TASK_SUCCESS,
  tasks: data,
  loadStatus: true,
});

export const loadTaskActive = data => ({
  type: LOAD_ACTIVE_TASK,
  activeTask: data.data,
});

export const changeTaskStatus = data => ({
  type: CHANGE_TASK_STATUS,
  data,
});

export function loadTasks() {
  return function (dispatch) {
    dispatch(loadTask());
    return axios.get('/tasks')
      .then(data => dispatch(loadTaskSuccess(data.data)));
  };
};

export function loadActiveTask (id) {
  return function (dispatch) {
    return axios.get(`/tasks?preferId=${id}`)
      .then(data=>dispatch(loadTaskActive(data)))
  }
}

export function changeStatusTask(id,statusTask) {
  return function (dispatch) {
    return axios.patch(`/tasks/${id}`, {"status": statusTask})
      .then(data => dispatch(changeTaskStatus(data)))
      
     
  }
}

