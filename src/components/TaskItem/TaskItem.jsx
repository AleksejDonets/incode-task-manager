import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card, CardContent, Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import { changeStatusTask } from '../../store/actions';
import styles from './styles';

const TaskItem = (props) => { 
  const { classes, task } = this.props;
  return (
    <Card className={classes.default}>
      <CardContent>
        <Link to="/tasks/task/">  
          <Typography variant="headline" component="h2">
            {task.title}
          </Typography>
          <Typography  variant="caption"  component="p">
            {task.description}
          </Typography>
        </Link>
      </CardContent>
    </ Card>
   
  )
  
  
};

const mapDispatchToProps = dispatch => ({
  changeStatus: (id, statusTask) => dispatch(changeStatusTask(id, statusTask)),
 
});

export default connect(null, mapDispatchToProps)(withStyles(styles)(TaskItem));
