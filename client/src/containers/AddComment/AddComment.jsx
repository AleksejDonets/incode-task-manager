import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { reduxForm, Field } from 'redux-form';
import { IconButton } from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';
import { CustomInput } from '../../components/CustomInput';

class AddComment extends Component {
  static defaultProps = {
    handleSubmit: PropTypes.func,
  }

  constructor(props) {
    super(props);
    this.submitComm = this.submitComm.bind(this);
  }

  submitComm(values) {
    const { submitHandler, reset } = this.props;
    submitHandler(values);
    reset();
  }

  render() {
    const { handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit(this.submitComm)}>
        <Field
          ref={this.input}
          name="text"
          multiline
          component={CustomInput}
          label="Your comment"
        />
        <IconButton type="submit" color="primary">
          <SendIcon />
        </IconButton>
      </form>
    );
  }
}
export default reduxForm({ form: 'addComment' })(AddComment);
