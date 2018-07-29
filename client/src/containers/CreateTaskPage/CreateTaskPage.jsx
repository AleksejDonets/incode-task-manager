import React, { Component } from 'react';
import { connect } from 'react-redux';
import { CreateTaskForm } from '../../components/CreateTaskForm';
import { DateRange } from '@material-ui/icons';
import { taskCreate } from '../../store/actions';

class CreateTaskPage extends Component {
  constructor(props) {
    super(props);
    this.submmitTask = this.submmitTask.bind(this);
  }

  submmitTask(data) {
    const { creatorId, createTask } = this.props;
    createTask(creatorId, data )
  }
  render() {
    const { arrUsers, creatorId } = this.props;
    return (
      <CreateTaskForm performerList={arrUsers} creatorId={creatorId} onSubmitHandler={values => this.submmitTask(values)} />
      
    )
  }
}
const mapStateToProps = ({ users, user }) => ({
  arrUsers: users.users,
  creatorId: user.profile._id,
});
const mapDispatchToProps = dispatch => ({
  createTask: (creatorId, data) => dispatch(taskCreate(creatorId, data))
});

export default connect(mapStateToProps, mapDispatchToProps)(CreateTaskPage);
