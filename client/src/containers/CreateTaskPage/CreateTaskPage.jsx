import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reset } from 'redux-form';
import { CreateTaskForm } from '../../components/CreateTaskForm';
import { taskCreate } from '../../store/actions';

class CreateTaskPage extends Component {
  constructor(props) {
    super(props);
    this.submmitTask = this.submmitTask.bind(this);
  }

  submmitTask(data) {
    const { creatorId, createTask, ressetForm } = this.props;
    createTask(creatorId, data);
    ressetForm();
  }

  render() {
    const { arrUsers, creatorId, createdMessage } = this.props;
    return (
      <CreateTaskForm performerList={arrUsers} creatorId={creatorId} onSubmitHandler={values => this.submmitTask(values)} message={createdMessage}/>
    )

    
  }
}
const mapStateToProps = ({ users, user, task }) => ({
  arrUsers: users.users,
  creatorId: user.profile._id,
  createdMessage: task.createdTask.message,
});
const mapDispatchToProps = dispatch => ({
  createTask: (creatorId, data) => dispatch(taskCreate(creatorId, data)),
  ressetForm: () => dispatch(reset('CreateTaskForm')),
});

export default connect(mapStateToProps, mapDispatchToProps)(CreateTaskPage);
