import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import user from './UserReducer';
import task from './TaskReduser';
import board from './BoardReducer';

export default combineReducers({
  user,
  form,
  task,
  board,
});
