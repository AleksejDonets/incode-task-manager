import React, { Component } from 'react';
import { connect } from 'react-redux';
import { TaskItem } from '../TaskItem';

class BoardPage extends Component {

  render() {
    const { tasks } = this.props;
    return (
      <div>
        {
        tasks.map((task)=>{
           return(
             <TaskItem task={task} key={task.id}  />  
           )
         })
        }
      </div>
    )
  }
}

const mapStateToProps = ({task}) => ({
  tasks: task.tasks
})
export default connect(mapStateToProps)(BoardPage);

