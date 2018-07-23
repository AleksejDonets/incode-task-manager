import axios from '../../axios';
import { LOAD_USER_TASK, LOAD_USER_TASK_SUCCESS, LOAD_USER_TASK_ERROR, CHANGE_TASK_STATUS, CHANGE_TASK_STATUS_SUCCESS, CHANGE_TASK_STATUS_ERROR } from './ActionTypes';


export const loadTaskUser = () =>({
  type: LOAD_USER_TASK,
});

export const loadTaskUserSuccess = data => ({
  type: LOAD_USER_TASK_SUCCESS,
  userTask: data.data,
  loadStatus: true,
});

export const loadTaskUserError= error => ({
  type: LOAD_USER_TASK_ERROR,
  error: error,
  loadStatus: false,
});

export const changeTaskStatus = data => ({
  type: CHANGE_TASK_STATUS,
});

export const changeTaskStatusSuccess = () => ({
  type: CHANGE_TASK_STATUS_SUCCESS
});

export const changeTaskStatusError = () => ({
  type: CHANGE_TASK_STATUS_ERROR,
});

export function loadUserTask(id) {
  return function (dispatch) {
    dispatch(loadTaskUser())
    return axios.get(`/tasks?preferId=${id}`)
    .then(data => dispatch(loadTaskUserSuccess(data)))
    .catch( error => dispatch(loadTaskUserError(error)))
  }
}

export function changeStatusTask(id, statusTask) {
  return function (dispatch) {
    return axios.patch(`/tasks/${id}`, {"status": statusTask})
    .then( data => dispatch(loadUserTask(data.data.preferId)))  
    .then( () => dispatch(changeTaskStatus()))
  }
}

