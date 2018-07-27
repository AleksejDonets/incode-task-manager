import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import user from './user';
import task from './allTasks';
import board from './board';
import selectedTask from './userTask';
import users from './users';

export default combineReducers({
  user,
  users,
  form,
  task,
  board,
  selectedTask,
});
