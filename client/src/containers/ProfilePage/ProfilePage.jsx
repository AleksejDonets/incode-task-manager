import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { editUserSucces } from '../../store/actions';
import { UserCard } from '../../components/UserCard';
import { EditUserCard } from '../../components/EditUserCard';

class ProfilePage extends Component {
  static defaultProps = {
    user: PropTypes.obj,
    saveEditUser: PropTypes.func,
  }

  constructor(props) {
    super(props);
    this.state = {
      edit: false,
    };
    this.saveUser = this.saveUser.bind(this);
    this.toggleEditStatus = this.toggleEditStatus.bind(this);
  }

  toggleEditStatus() {
    const { edit } = this.state;
    this.setState({
      edit: !edit,
    });
  }

  saveUser(user) {
    const { saveEditUser } = this.props;
    saveEditUser(user);
    this.toggleEditStatus();
  }

  render() {
    const { user } = this.props;
    const { edit } = this.state;
    if (edit) {
      return (
        <EditUserCard initialValues={user} onSubmitHandler={values => this.saveUser(values)} />
      );
    }
    return (
      <UserCard user={user} toggleEdit={this.toggleEditStatus} />
    );
  }
}

const mapStateToProps = ({ user }) => ({
  user: user.profile,
});

const mapDispatchToProps = dispatch => ({
  saveEditUser: user => dispatch(editUserSucces(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProfilePage);
