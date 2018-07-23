import { LOAD_SELECTED_TASK_SUCCESS } from '../actions/ActionTypes';

const initialState = {
  activeTask: {},
  loadStatus: false,
}

export default (state = initialState, action) => {
  switch(action.type) {
    case LOAD_SELECTED_TASK_SUCCESS: 
      return Object.assign({}, state, { activeTask: action.activeTask, loadStatus: action.loadStatus })
    default:
      return state;
  }
}