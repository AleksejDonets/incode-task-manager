import { 
  LOGIN_USER_SUCCESS, 
  LOGIN_USER_ERROR, 
  SIGN_USER_SUCCESS, 
  SIGN_USER_ERROR, 
  UPDATE_USER_SUCCESS, 
  LOAD_USER_SUCCESS, 
  LOAD_ALL_USER_SUCCESS,
  LOAD_ALL_USER_ERROR,
  LOG_OUT,
} from '../actions/ActionTypes';

const initialState = {
  profile: {},
  users:[],
  isLogged: false,
  error: false,
  load: false
};


export default (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_USER_ERROR: 
      return Object.assign({}, state, { error: action.error });
    case LOGIN_USER_SUCCESS: 
      return Object.assign({}, state, { isLogged: action.isLogged, profile: action.profile });
    case SIGN_USER_SUCCESS: 
      return Object.assign({}, state, { profile: action.data, isLogged: action.isLogged });
    case SIGN_USER_ERROR: 
      return Object.assign({}, state, { error: action.error });
    case LOAD_USER_SUCCESS:
      return Object.assign({}, state, { profile: action.profile });
    case UPDATE_USER_SUCCESS:
      return Object.assign({}, state, { profile: action.user });
    case LOG_OUT: 
      return Object.assign({}, state, { isLogged: action.isLogged });
    default:
      return state;
  }
};
