import React, { Component } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { TaskItem } from '../TaskItem';
import { loadTasks } from '../../store/actions';

class BoardPage extends Component {


  componentDidMount() {
    const { loadTask } = this.props;
    loadTask();
  }

  render() {
    const { tasks } = this.props; 
    return (
      <div>
        {
          tasks.map((task)=>{
            return (
              <TaskItem task={task} key={task.id}  />  
            )
          })
        }
      </div>
    )
  }
}

const mapStateToProps = ({ board }) => ({
  tasks: board.tasks,
});

const mapDispatchToProps = dispatch => ({
  loadTask: () => dispatch(loadTasks()),
});

export default connect(mapStateToProps, mapDispatchToProps)(BoardPage);

