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
    return (
      <SignForm onSubmitHandler = {values => this.handleSign(values)}/>
    )
  }
}
const mapStateToProps = state => ({

});
const mapDispatchToProps = dispatch => ({
  signUp: data => dispatch(signUser(data)),
});
export default connect(mapStateToProps, mapDispatchToProps)(SignPage);