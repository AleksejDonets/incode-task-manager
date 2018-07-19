import { LOAD_TASK_SUCCESS, LOAD_ACTIVE_TASK, CHANGE_TASK_STATUS } from '../actions/ActionTypes';

const initialState = {
  tasks: [],
  activeTask: [],
  loadStatus: false,
}

export default (state = initialState, action) => {
  switch (action.type) {
    case LOAD_TASK_SUCCESS:
      return Object.assign({}, state, { tasks: action.tasks, loadStatus: action.loadStatus });
    case LOAD_ACTIVE_TASK:
      return Object.assign({}, state, { activeTask: action.activeTask });
    default:
      return state;
  }
};
