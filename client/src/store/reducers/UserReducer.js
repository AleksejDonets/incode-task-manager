import { UPDATE_USER_SUCCESS, LOAD_USER_SUCCESS } from '../actions/ActionTypes';

const initialState = {
  profile: {},
};


export default (state = initialState, action) => {
  switch (action.type) {
    case LOAD_USER_SUCCESS:
      return Object.assign({}, state, { profile: action.profile });
    case UPDATE_USER_SUCCESS:
      return Object.assign({}, state, { profile: action.user });
    default:
      return state;
  }
};
