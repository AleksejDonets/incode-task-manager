import React, { Component } from 'react';
import { connect } from 'react-redux';
import { TaskItem } from '../TaskItem';
import { loadTasks } from '../../store/actions';

class BoardPage extends Component {

  constructor(props){
    super(props);

    this.state = {
      tasks: [],
    }
  }
  
  componentDidMount(){
    const { loadTask } = this.props;
    const { tasks } = this.state;
    
    loadTask()
  }
  static getDerivedStateFromProps(nextProps, prevState){
    console.log(prevState);
    console.log(nextProps)
    if(prevState.tasks != nextProps.tasks){
      return {
        tasks: nextProps.tasks,
      }
    } 
    return null
  }
 
  render() {
    
    
    return (
      <div>
        {
        this.state.tasks.map((task)=>{
           return(
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

