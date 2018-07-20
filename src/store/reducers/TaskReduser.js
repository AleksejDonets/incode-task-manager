import { LOAD_ACTIVE_TASK } from '../actions/ActionTypes';

const initialState = {
  activeTask: [],
  loadStatus: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOAD_ACTIVE_TASK:
      return Object.assign({}, state, { activeTask: action.activeTask });
    default:
      return state;
  }
};
