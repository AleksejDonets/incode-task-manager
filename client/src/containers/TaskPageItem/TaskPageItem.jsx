import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { Card, CardContent, Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { TaskStatus } from '../../components/TaskStatus';
import { Comments } from '../Comments';
import { changeStatusTask, commentAdd } from '../../store/actions';
import styles from './styles';

class TaskPageItem extends Component {
  static defaultProps = {
    task: PropTypes.obj,
  }

  constructor(props) {
    super(props);
    const { task } = this.props;
    this.state = {
      status: task.status,
    };
    this.handleChangeStatus = this.handleChangeStatus.bind(this);
    this.addComment = this.addComment.bind(this);
  }


  addComment({ text }) {
    const {
      sendComment,
      userId,
      taskId,
      comments,
      userName,
    } = this.props;
    sendComment(taskId, [
      ...comments,
      {
        id: userId,
        author: userName,
        text,
        createdAt: new Date(),
      },
    ]);
  }

  handleChangeStatus(event) {
    const { changeStatus, task } = this.props;
    const status = event.target.value;

    this.setState({
      [event.target.name]: event.target.value,
    });
    changeStatus(task.id, status);
  }

  render() {
    const { classes, task, isAdmin } = this.props;
    const { status } = this.state;
    return (
      <Card className={classes.card}>
        <CardContent>
          <Typography gutterBottom variant="headline" component="h2">
            {task.title}
          </Typography>
          <Typography variant="subheading" component="p">
            {task.description}
          </Typography>
          <TaskStatus admin={isAdmin} onChange={this.handleChangeStatus} status={status} />
        </CardContent>
        <Comments messages={task.comments} id={task.id} addComment={this.addComment} />
      </Card>
    );
  }
}

const mapStateToPops = ({ user, selectedTask }) => ({
  isAdmin: user.isAdmin,
  userId: user.profile.id,
  userName: user.profile.first_name,
  taskId: selectedTask.activeTask.id,
  comments: selectedTask.activeTask.comments,
});
const mapDispatchToProps = dispatch => ({
  changeStatus: (id, status, preferId) => dispatch(changeStatusTask(id, status, preferId)),
  sendComment: (id, comment) => dispatch(commentAdd(id, comment)),
});
export default connect(mapStateToPops, mapDispatchToProps)(withStyles(styles)(TaskPageItem));
