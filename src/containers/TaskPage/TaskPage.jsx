import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadTaskSelected } from '../../store/actions';
import { TaskPageItem } from '../TaskPageItem';
import { Loader } from '../../components/Loader';

class TaskPage extends Component {

  componentDidMount() {
    const {match:{params:{id}}, loadCurrentTask } = this.props;
    loadCurrentTask(id)
  }

  render() {
    const { task, isAdmin, isLoad } = this.props;
    if(!isLoad){
      return (
        <Loader />
      )
    }
    return (
      <TaskPageItem task={task} admin={isAdmin} />
    )
  }
}

const mapStateToProps = ({selectedTask, user }) => ({
  task: selectedTask.activeTask,
  isAdmin: user.isAdmin,
  isLoad: selectedTask.loadStatus,
});
const mapDispatchToProps = dispatch => ({
  loadCurrentTask: id => dispatch(loadTaskSelected(id)),
});
export default connect(mapStateToProps, mapDispatchToProps)(TaskPage);