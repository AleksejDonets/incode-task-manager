import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reset } from 'redux-form';
import { CreateTaskForm } from '../../components/CreateTaskForm';
import { taskCreate } from '../../store/actions';

class CreateTaskPage extends Component {
  constructor(props) {
    super(props);
    this.submitTask = this.submitTask.bind(this);
  }

  submitTask(data) {
    const { creatorId, createTask, resetForm } = this.props;
    createTask(creatorId, data);
    resetForm();
  }

  render() {
    const { arrUsers, creatorId, createdMessage } = this.props;
    return (
      <CreateTaskForm
        performerList={arrUsers}
        creatorId={creatorId}
        onSubmitHandler={values => this.submitTask(values)}
        message={createdMessage}
      />
    );
  }
}
const mapStateToProps = ({ users, user, task }) => ({
  arrUsers: users.users,
  creatorId: user.profile._id,
  createdMessage: task.createdTask.message,
});
const mapDispatchToProps = dispatch => ({
  createTask: (creatorId, data) => dispatch(taskCreate(creatorId, data)),
  resetForm: () => dispatch(reset('CreateTaskForm')),
});

export default connect(mapStateToProps, mapDispatchToProps)(CreateTaskPage);
