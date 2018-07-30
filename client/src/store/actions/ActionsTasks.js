import axios from '../../axios';
import { loadAllTasks } from'./ActionsBoard';
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
  EDIT_TASK,
  EDIT_TASK_SUCCESS,
  EDIT_TASK_ERROR,
  DELETE_TASK_SUCCESS,
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
    return axios.get(`/tasks/user/${id}`)
      .then(data =>{
        dispatch(loadTaskUserSuccess(data))
      } )
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
    dispatch(changeTaskStatus())
    return axios.patch(`/tasks/${id}`, {id, statusTask })
      .then(data =>{
        dispatch(changeTaskStatusSuccess())
        dispatch(loadUserTask(data.data.preferId))
        dispatch(loadAllTasks())
      });
  };
};


const createTask = () => ({
  type: CREATE_TASK,
});
const createTaskSuccess = data => ({
  type: CREATE_TASK_SUCCESS,
  message: data,
});
const createTaskError = () => ({
  type: CREATE_TASK_ERROR,
});

export function taskCreate (creatorId, task) {
  return dispatch => {
    dispatch(createTask())
    axios.post('/task', { creatorId, task })
      .then(data => dispatch(createTaskSuccess(data.data)))
      .catch( error => dispatch(createTaskError(error)))
  }
};

const editTask = data => ({
  type: EDIT_TASK,
  selectedTask: data
});

const editTaskSuccess = data => ({
  type: EDIT_TASK_SUCCESS,
  task: data
});

const editTaskError = error => ({
  type: EDIT_TASK_ERROR,
  error: error,
});

export function taskEdit(task) {
  return dispatch => {
    dispatch(editTask(task))
  }
}
export function taskEditSuccess(taskId, task) {
  return dispatch => {
    axios.post('/task/edit', {taskId, task})
    .then( ()=> dispatch(editTaskSuccess()))
    .catch(error =>dispatch(editTaskError(error)))
  }
}


const deleteTask = () => ({
  type: DELETE_TASK_SUCCESS,
});

export function deleteTaskSuccess( idTask) {
  return dispatch => {
    axios.delete(`/tasks/${idTask}`)
    .then(() => {
      dispatch(deleteTask())
      dispatch(loadAllTasks())
    })
  }
}