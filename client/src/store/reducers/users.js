import {  LOAD_ALL_USER_SUCCESS, LOAD_ALL_USER_ERROR,} from '../actions/ActionTypes';
const initialState = {
  users: [],
  loadStatus: false,
  error: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOAD_ALL_USER_SUCCESS: 
      return Object.assign({}, state, { users: action.users });
    case LOAD_ALL_USER_ERROR: 
      return Object.assign({}, state, { error: action.error });
    default:
      return state;
  }
}
