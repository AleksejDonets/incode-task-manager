import React, { Component }  from 'react';
import { connect } from 'react-redux';
import { Card, CardContent, Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import styles from './styles';
import { TaskStatus } from '../TaskStatus';
import { changeStatusTask } from '../../store/actions';

class TaskItem extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      status: this.props.task.status,
    }
    this.handleChangeStatus = this.handleChangeStatus.bind(this);
  };

  handleChangeStatus(event) {
    const { changeStatus } = this.props;
    const { id } = this.props.task;
    const status = event.target.value;
    this.setState({ 
      [event.target.name]: event.target.value, 
    });
    changeStatus(id, status);
    
  };

  render() {
    const { classes, task, isAdmin } = this.props;
    const { status } = this.state;
    
    return (
      <Card className={classes.default}>
        <CardContent>
          <Link to={`/tasks/task/${task.id}`} className={classes.cardLink}>  
            <Typography variant="headline" component="h2">
              {task.title}
            </Typography>
            <Typography  variant="subheading" component="p">
              {task.short_description}
            </Typography>
          </Link>
          <TaskStatus status={status} onChange={this.handleChangeStatus} admin={isAdmin}/>
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
});
export default connect(mapStateToPops, mapDispatchToProps)(withStyles(styles)(TaskItem));
