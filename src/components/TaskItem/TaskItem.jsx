import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card, CardContent, Typography, Select, MenuItem } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import { changeStatusTask } from '../../store/actions';
import styles from './styles';

const statusList = ['To Do', 'In Progress', 'Peer Review', 'Done'];

class TaskItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: this.props.task.status,
    }
    this.handleChange  = this.handleChange.bind(this);
  }

  componentDidMount(){
    const { task } = this.props;
  }

  handleChange(event){
    const { task, changeStatus } = this.props;
    const statusTask = event.target.value;
    const id = task.id;
    console.log(id)
    this.setState({
      [event.target.name]: event.target.value
    });
    changeStatus(id, statusTask);
  }


  renderTask(){
     
  }

  render(){
    const { classes, task, admin } = this.props;
     return (
      <Card className={classes.default}>
        
        <CardContent>
          <Typography variant="headline" component="h2">
            {task.title}
          </Typography>
          <Typography  variant="caption"   component="p">
            {task.description}
          </Typography>
          <Select
            value = { this.state.status }
            onChange = { this.handleChange }
            disabled = { !admin }
            inputProps={{
              name: 'status',
              id: 'age-simple',
            }}
          >
            {
              statusList.map((item, index)=> <MenuItem value={item} key={index}>{item}</MenuItem>)
            }
          </Select>
        </CardContent>
        
      </ Card>
   
     )
      
    
   
  }
  
};

const mapDispatchToProps = dispatch => ({
  changeStatus: (id, statusTask) => dispatch(changeStatusTask(id, statusTask)),
});

export default connect(null, mapDispatchToProps)(withStyles(styles)(TaskItem));
