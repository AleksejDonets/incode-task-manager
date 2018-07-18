import axios from '../../axios';
import { LOAD_TASK, LOAD_TASK_SUCCESS, LOAD_ACTIVE_TASK } from './ActionTypes';

export const loadTask = () => ({
  type: LOAD_TASK,
});

export const loadTaskSuccess = (data)=>({
  type: LOAD_TASK_SUCCESS,
  tasks: data.data,
  loadStatus: true,
});

export const loadTaskActive = (data) => ({
  type: LOAD_ACTIVE_TASK,
  activeTask: data,
});

export function loadTasks() {
  return function (dispatch) {
    dispatch(loadTask());
    return axios.get('/tasks')
      .then(data => dispatch(loadTaskSuccess(data)));
  };
};

export function loadActiveTask (id) {
  return function (dispatch) {
    return axios.get('/tasks/',
           {
            "id": id

           }
          )
      .then(data => dispatch(loadTaskActive(data)))
  }

}

