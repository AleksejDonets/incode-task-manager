import { LOAD_USER_TASK_SUCCESS } from '../actions/ActionTypes';

const initialState = {
  userTask: [],
  loadStatus: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOAD_USER_TASK_SUCCESS:
      return Object.assign({}, state, { userTask: action.userTask, loadStatus: action.loadStatus});
    default:
      return state;
  }
};
