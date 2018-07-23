import axios from '../../axios';
import { LOAD_SELECTED_TASK, LOAD_SELECTED_TASK_SUCCESS, LOAD_SELECTED_TASK_ERROR, ADD_COMMENT, ADD_COMMENT_SUCCESS, ADD_COMMENT_ERROR } from './ActionTypes';

const loadSelectedTask = () => ({
  type: LOAD_SELECTED_TASK,
  loadStatus: false,
});

const loadSelectedTaskSuccess = data => ({
  type: LOAD_SELECTED_TASK_SUCCESS,
  activeTask: data.data,
  loadStatus: true,
});

const loadSelectedTaskError = error => ({
  type: LOAD_SELECTED_TASK_ERROR,
  error,
  loadStatus: false,
});

export function loadTaskSelected(id) {
  return function (dispatch) {
    dispatch(loadSelectedTask())
    return axios.get(`/tasks/${id}`)
    .then(data => dispatch(loadSelectedTaskSuccess(data)))
    .catch( error => dispatch(loadSelectedTaskError(error)))
  }
}

const addComment = () => ({
  type: ADD_COMMENT,
});

const addCommentSuccess = data => ({
  type: ADD_COMMENT_SUCCESS,
  data,
});

const addCommentError = () => ({
  type: ADD_COMMENT_ERROR,
});


export function commentAdd(idTask,comment) {
  return function (dispatch) {
    dispatch(addComment())
    return axios.patch(`/tasks/${idTask}` ,{ "comments":comment } )
    .then(idTask => dispatch(loadSelectedTaskSuccess(idTask)))
    .then(()=>dispatch(addCommentSuccess()))
    .catch( error => dispatch(addCommentError(error)))
  }
}