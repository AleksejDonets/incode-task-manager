import React, { Component } from 'react';
import { connect } from 'react-redux';
import { logInUser } from '../../store/actions';
import { LoginForm } from '../../components/LoginForm';

class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.handleLog = this.handleLog.bind(this);
  }

  handleLog(data) {
    const { logIn } = this.props;
    logIn(data);
  }

  render() {
    const { error } = this.props;
    return (
      <LoginForm errorMessage={error ? error[0] : ''} onSubmitHandler={values => this.handleLog(values)} />
    );
  }
}
const mapStateToProps = ({ user }) => ({
  error: user.error,
});
const mapDispatchToProps = dispatch => ({
  logIn: data => dispatch(logInUser(data)),
});
export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
