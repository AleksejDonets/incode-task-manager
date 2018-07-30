import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import { TaskItem } from '../../components/TaskItem';
import { loadAllTasks } from '../../store/actions';
import { Loader } from '../../components/Loader';
import styles from './styles';

class BoardPage extends Component {
  static defaultProps = {
    tasks: PropTypes.obj,
  }

  componentDidMount() {
    const { loadTask } = this.props;
    loadTask();
  }

  render() {
    const { tasks, classes, admin } = this.props;
    console.log(admin)
    if (!tasks) {
      return <Loader />;
    }

    return (
      <Fragment>
        <div className={classes.title}>
          <Typography variant="display2" component="h1">
            Board
          </Typography>
        </div>
        <div className={classes.TaskContainer}>
          {
            tasks.map(task => (
              <TaskItem task={task} key={task._id} admin={ admin } />
            ))
          }
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = ({ board, user }) => ({
  tasks: board.tasks,
  admin: user.profile.isAdmin,
});

const mapDispatchToProps = dispatch => ({
  loadTask: () => dispatch(loadAllTasks()),
});

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(BoardPage));
