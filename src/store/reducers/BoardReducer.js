import { LOAD_TASK, LOAD_TASK_SUCCESS } from '../actions/ActionTypes';

const initialState = {
  tasks: [],
  users: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOAD_TASK_SUCCESS:
      return Object.assign({}, state, { tasks: action.tasks });
    default:
      return state;
  }
};
