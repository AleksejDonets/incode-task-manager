import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import { loadActiveTask } from '../../store/actions';
import { TaskItem } from '../TaskItem';
import styles from './styles';

class UserTasksPage extends Component {

 
  componentDidMount() {
    const { loadActiveTasks, match } = this.props;
    loadActiveTasks(match.params.id);
  }
  render() {
    const {userTasks, isAdmin, classes } = this.props;

    return (
      <div className={classes.TaskContainer}>
      {
        userTasks.map((task)=>{
           return(
             <TaskItem task={task} key={task.id} admin={isAdmin} />  
           )
         })
       }
      </div>
    ) 
  };
};

const mapStateToProps = ({ user, task }) => ({
  id: user.profile,
  isAdmin: user.profile.isAdmin,
  userTasks: task.activeTask,
});

const mapDispatchToProps = dispatch =>({
  loadActiveTasks: id => dispatch(loadActiveTask(id)),
});
export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(UserTasksPage));
