import React, { Component, Fragment }  from 'react';
import { connect } from 'react-redux';
import { Card, CardContent, Typography, IconButton } from '@material-ui/core';
import { Edit, Delete } from '@material-ui/icons';
import { withStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import styles from './styles';
import { TaskStatus } from '../TaskStatus';
import { changeStatusTask, taskEdit, deleteTaskSuccess } from '../../store/actions';

class TaskItem extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      status: this.props.task.taskStatus,
    }
    this.handleChangeStatus = this.handleChangeStatus.bind(this);
    this.editTask = this.editTask.bind(this);
    this.taskDelete = this.taskDelete.bind(this);
  };

  handleChangeStatus(event) {
    const { changeStatus } = this.props;
    const { task: { _id } } = this.props;
    
    const status = event.target.value;
    this.setState({ 
      [event.target.name]: event.target.value, 
    });
    changeStatus(_id, status);
  }

  editTask() {
    const { task, editTask } = this.props;
    editTask(task);
  }

  taskDelete() {
    const { task: { _id }, deleteTask } = this.props;
    deleteTask(_id);
  }

  render() {
    const { classes, task, admin } = this.props;
    const { status } = this.state;
    return (
      <Card className={classes.default}>
        {admin ? 
          ( 
            <Fragment>
              <Link to="/task/edit/">
                <IconButton color="primary" onClick={this.editTask} className={classes.button} component="span" style={{float: 'right'}}>
                  <Edit />
                </IconButton>
              </ Link>
              <IconButton  color="primary" onClick={this.taskDelete} component="span" style={{float: 'left'}}>
                <Delete />
              </IconButton>
            </Fragment>
          ): ''}
        <CardContent>
          <Link to={`/tasks/task/${task._id}`} className={classes.cardLink}>  
            <Typography variant="headline" component="h2">
              {task.title}
            </Typography>
            <Typography variant="subheading" component="p" className={classes.taskDescription}>
              {task.description}
            </Typography>
          </Link>
          <TaskStatus status={status} onChange={this.handleChangeStatus} admin={admin}/>
        </CardContent>
      </Card>
    );
  }
};
const mapStateToPops = user => ({
  isAdmin: user.isAdmin,
})
const mapDispatchToProps = dispatch => ({
  changeStatus: (id, status, preferId) => dispatch(changeStatusTask(id, status, preferId)),
  editTask: task => dispatch(taskEdit(task)),
  deleteTask: id => dispatch(deleteTaskSuccess(id)),
});
export default connect(mapStateToPops, mapDispatchToProps)(withStyles(styles)(TaskItem));
