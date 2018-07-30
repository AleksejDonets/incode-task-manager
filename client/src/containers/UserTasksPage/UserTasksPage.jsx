import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { loadUserTask } from '../../store/actions';
import { TaskItem } from '../../components/TaskItem';
import { Loader } from '../../components/Loader';
import styles from './styles';

class UserTasksPage extends Component {
  static defaultProps = {
    userTasks: PropTypes.obj,
  }

  componentDidMount() {
    const { loadActiveTasks, id } = this.props;
    loadActiveTasks(id);
  }

  render() {
    const {
      userTasks,
      isAdmin,
      classes,
      isLoad,
    } = this.props;
    if (isLoad) {
      return <Loader />;
    }
    return (
      <Fragment>
        <div className={classes.title}>
          <Typography variant="display2" component="h1">
            User task's
          </Typography>
        </div>
        <div className={classes.TaskContainer}>
          {
            userTasks.map(task => (
              <TaskItem task={task} key={task._id} admin={isAdmin} />
            ))
          }
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = ({ user, task }) => ({
  id: user.profile._id,
  isAdmin: user.profile.isAdmin,
  userTasks: task.userTask,
  isLoad: task.loadStatus,
});

const mapDispatchToProps = dispatch => ({
  loadActiveTasks: id => dispatch(loadUserTask(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(UserTasksPage));
