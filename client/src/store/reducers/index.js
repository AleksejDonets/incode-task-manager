import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import user from './UserReducer';
import task from './TaskReduser';
import board from './BoardReducer';
import selectedTask from './TaskPageReducer';

export default combineReducers({
  user,
  form,
  task,
  board,
  selectedTask,
});
