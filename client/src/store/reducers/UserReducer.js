import { LOGIN_USER_SUCCESS , UPDATE_USER_SUCCESS, LOAD_USER_SUCCESS } from '../actions/ActionTypes';

const initialState = {
  profile: {},
  isLogged: false,
};


export default (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_USER_SUCCESS: 
      return Object.assign({}, state, {isLogged: action.isLogged, profile: action.profile });
    case LOAD_USER_SUCCESS:
      return Object.assign({}, state, { profile: action.profile });
    case UPDATE_USER_SUCCESS:
      return Object.assign({}, state, { profile: action.user });
    default:
      return state;
  }
};
