import React, { Component } from 'react';
import { connect } from 'react-redux';
import { CreateTaskForm } from '../../components/CreateTaskForm';
import { loadAllUsers } from '../../store/actions';

class CreateTaskPage extends Component {
  componentDidMount() {
    const { loadUsers } = this.props;
    loadUsers();
  }
  
  render() {
    return (
      <CreateTaskForm />
      
    )
  }
}
const mapStateToProps = state => ({

});
const mapDispatchToProps = dispatch => ({
  loadUsers: () => dispatch(loadAllUsers()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CreateTaskPage);
