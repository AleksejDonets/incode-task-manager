import { LOAD_ALL_TASK_SUCCESS } from '../actions/ActionTypes';

const initialState = {
  tasks: [],
  users: [],
  isLoading: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOAD_ALL_TASK_SUCCESS:
      return Object.assign({}, state, { tasks: action.tasks, isLoading: action.isLoading });
    default:
      return state;
  }
};
