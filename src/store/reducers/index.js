import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import user from './UserReducer';

export default combineReducers({
  user,
  form,
});
