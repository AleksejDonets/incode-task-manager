import React, { Component } from 'react';
import { connect } from 'react-redux';
import { CreateTaskForm } from '../../components/CreateTaskForm';
import { taskEditSuccess } from '../../store/actions';

class EditTaskPage extends Component {
  constructor(props){
    super(props);

    this.submmitEditTask = this.submmitEditTask.bind(this)
  }
  submmitEditTask(data) {
    const { task:{_id}, saveEdit } = this.props;
    saveEdit(_id, data);
  }

  render() {
    const { task, users, creatorId } = this.props;
    return (
      <CreateTaskForm initialValues={ task } performerList={ users } creatorId={ creatorId } onSubmitHandler={values => this.submmitEditTask(values)} />
    )
  }
}

const mapDispatchToProps = dispatch =>({
  saveEdit: (_id, data) => dispatch(taskEditSuccess(_id, data)),
})
const mapStateToProps = ({ task, users, user }) => ({
  task: task.editTask,
  users: users.users,
  creatorId: user.profile._id,
})
export default connect(mapStateToProps, mapDispatchToProps)(EditTaskPage);
