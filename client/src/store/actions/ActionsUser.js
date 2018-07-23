import axios from '../../axios';
import {
  LOAD_USER,
  LOAD_USER_SUCCESS,
  UPDATE_USER,
  UPDATE_USER_SUCCESS,
} from './ActionTypes';


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
    return axios.get('/user')
      .then(data => dispatch(loadUserSuccess(data)));
  };
}
