import axios from '../../axios';
import authToken from './../../authToken';
import {

  LOAD_USER,
  LOAD_USER_SUCCESS,
  LOAD_ALL_USER,
  LOAD_ALL_USER_SUCCESS,
  LOAD_ALL_USER_ERROR,
  UPDATE_USER,
  UPDATE_USER_SUCCESS,
  LOGIN_USER,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_ERROR,
  SIGN_USER,
  SIGN_USER_SUCCESS,
  SIGN_USER_ERROR,
  LOG_OUT,
} from './ActionTypes';

/* Edit User info */
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
    return axios.put('/user', user, authToken);
  };
}
/* END Edit User info */

/* Load all users */

const loadUsers = () => ({
  type:LOAD_ALL_USER,
  status: false
});
const loadUsersSuccess = data => ({
  type: LOAD_ALL_USER_SUCCESS,
  load: true,
  data,
});

const loadUserError = error => ({
  type: LOAD_ALL_USER_ERROR,
  load: error,
});

export function loadAllUsers() {
  return dispatch => {
    dispatch(loadUsers())
    axios.get('/users',  authToken)
      .then(data => {
        console.log(data.data)
        dispatch(loadUsersSuccess(data.data))
      })
      .catch( error => dispatch(loadUserError(error)))
  }
}
/*END Load all users*/

/* Load current user*/

const loadUser = () => ({
  type: LOAD_USER,
});

const loadUserSuccess = data => ({
  type: LOAD_USER_SUCCESS,
  profile: data.data,
});

export function loadUserFetch() {
  return function (dispatch) {
    dispatch(loadUser());
    return axios.get('/user', authToken)
      .then(data => dispatch(loadUserSuccess(data)))
      .catch( error => console.log(error .data))
  };
}
/* END Load current user */

/* LogIn User Action's */

const logIn = () => ({
  type: LOGIN_USER,
  status: false,

});

const logInSuccess = (data) => ({
  type: LOGIN_USER_SUCCESS,
  isLogged: true,
  profile: data
  
});

const logInError = (error) => ({
  type: LOGIN_USER_ERROR,
  error: error,
})

export function logInUser({login, password}) {
  return dispatch => {
    dispatch(logIn());

    axios.post('/login', {login, password})
    .then(response => {
      const { token, user } = response.data;
      localStorage.setItem('token', token);
      dispatch(logInSuccess(user));
     })
    .catch(error => {
      dispatch(logInError(error.response.data.errors));
    });
  }
}

/*Sign user*/
const signIn = () => ({
  type: SIGN_USER,
  status: false
});

const signSuccess = (data) => ({
  type: SIGN_USER_SUCCESS,
  profile: data,
  isLogged: true
});

const signError = (error) => ({
  type: SIGN_USER_ERROR,
  error: error
})

export function signUser(data) {
  return dispatch => {
    dispatch(signIn());
    axios.post('/signup', data)
    .then(response => dispatch(signSuccess(response)))
    .catch(error => dispatch(signError(error.response.data.errors)))
  }
}
/* END Sign user */

/* Logout user */
const logOut = () => ({
  type: LOG_OUT,
  isLogged: false,
});



export function verifyUser() {
  return dispatch => {
    axios.get('/verify',authToken)
    .then(response =>{
      const { activeUser } = response.data;
      dispatch(logInSuccess(activeUser))
    })
    .catch(error =>  dispatch(logOut()))
  }
}

export function logOutUser() {
  return dispatch => {
    dispatch(logOut());
    localStorage.removeItem('token');
    return dispatch(verifyUser());
  }
}