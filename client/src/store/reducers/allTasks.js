import { LOAD_SELECTED_TASK_SUCCESS, CREATE_TASK_SUCCESS, EDIT_TASK } from '../actions/ActionTypes';

const initialState = {
  activeTask: {},
  loadStatus: false,
  createdTask: '',
  editTask:{},
}

export default (state = initialState, action) => {
  switch (action.type) {
    case LOAD_SELECTED_TASK_SUCCESS:
      return Object.assign({}, state, { activeTask: action.activeTask, loadStatus: action.loadStatus });
    case CREATE_TASK_SUCCESS: 
      return Object.assign({}, state, { createdTask: action.message });
    case EDIT_TASK: 
      return Object.assign({}, state, {editTask: action.selectedTask });
    default:
      return state;
  }
}