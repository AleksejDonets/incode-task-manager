import axios from '../../axios';
import {
  LOAD_USER,
  LOAD_USER_SUCCESS,
  UPDATE_USER,
  UPDATE_USER_SUCCESS,
  LOGIN_USER,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_ERROR,
} from './ActionTypes';

/*Load and Update User Action's */
export const loadUser = () => ({
  type: LOAD_USER,
});

export const loadUserSuccess = data => ({
  type: LOAD_USER_SUCCESS,
  profile: data.data,
});

export const editUserSuccess = user => ({
  type: UPDATE_USER_SUCCESS,
  user,
});

export const editUser = () => ({
  type: UPDATE_USER,
});

export function editUserSucces(user) {
  return function (dispatch) {
    dispatch(editUser());
    dispatch(editUserSuccess(user));
    return axios.put('./user', user);
  };
}

export function loadUserFetch() {
  return function (dispatch) {
    dispatch(loadUser());
    return axios.get('/users')
      .then(data => dispatch(loadUserSuccess(data)));
  };
}

/*LogIn User Action's*/

const logIn = () => ({
  type: LOGIN_USER,
});

const logInSuccess = () => ({
  type: LOGIN_USER_SUCCESS,
});

const logInError = () => ({
  type: LOGIN_USER_ERROR,
})

export function logInUser({data}) {
  return dispatch => {
    dispatch(logIn());
    axios.post('/login', {})
    .then(() => dispatch(logInSuccess()))
    .catch(error=>dispatch(logInError(error)))
  }
}