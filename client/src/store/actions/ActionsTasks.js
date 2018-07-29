import axios from '../../axios';
import {
  LOAD_USER_TASK,
  LOAD_USER_TASK_SUCCESS,
  LOAD_USER_TASK_ERROR,
  CHANGE_TASK_STATUS,
  CHANGE_TASK_STATUS_SUCCESS,
  CHANGE_TASK_STATUS_ERROR,
  CREATE_TASK,
  CREATE_TASK_SUCCESS,
  CREATE_TASK_ERROR,
} from './ActionTypes';


export const loadTaskUser = () => ({
  type: LOAD_USER_TASK,
});

export const loadTaskUserSuccess = data => ({
  type: LOAD_USER_TASK_SUCCESS,
  userTask: data.data,
  loadStatus: true,
});

export const loadTaskUserError = error => ({
  type: LOAD_USER_TASK_ERROR,
  error,
  loadStatus: false,
});



export function loadUserTask(id) {
  return function (dispatch) {
    dispatch(loadTaskUser());
    return axios.get(`/tasks?preferId=${id}`)
      .then(data => dispatch(loadTaskUserSuccess(data)))
      .catch(error => dispatch(loadTaskUserError(error)));
  };
};

export const changeTaskStatus = data => ({
  type: CHANGE_TASK_STATUS,
  data,
});

export const changeTaskStatusSuccess = () => ({
  type: CHANGE_TASK_STATUS_SUCCESS,
});

export const changeTaskStatusError = () => ({
  type: CHANGE_TASK_STATUS_ERROR,
});
export function changeStatusTask(id, statusTask) {
  return function (dispatch) {
    return axios.patch(`/tasks/${id}`, { "status": statusTask })
      .then(data => dispatch(loadUserTask(data.data.preferId)))
      .then(() => dispatch(changeTaskStatus()));
  };
};


const createTask = () => ({
  type: CREATE_TASK,
});
const createTaskSuccess = () => ({
  type: CREATE_TASK_SUCCESS,
});
const createTaskError = () => ({
  type: CREATE_TASK_ERROR,
});

export function taskCreate (creatorId, task) {
  return dispatch => {
    dispatch(createTask())
    axios.post('/task', { creatorId, task })
    .then(data=> console.log(data))
    .catch( error => console.log(error));
  }
}