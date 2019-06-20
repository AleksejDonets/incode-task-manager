import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signUser } from '../../store/actions';
import { SignForm } from '../../components/SignForm';

class SignPage extends Component {
  constructor(props) {
    super(props);
    this.handleSign = this.handleSign.bind(this)
  }

  handleSign(data) {
    const { signUp } = this.props;
    signUp(data);
  }

  render() {
    const { error } = this.props;
    return (
      <SignForm errorMessage={error ? error[0] : ''} onSubmitHandler={values => this.handleSign(values)} />
    );
  }
}
const mapStateToProps = ({ user, router }) => ({
  error: user.error,
  location: router.location.pathname,
});
const mapDispatchToProps = dispatch => ({
  signUp: data => dispatch(signUser(data)),
});
export default connect(mapStateToProps, mapDispatchToProps)(SignPage);