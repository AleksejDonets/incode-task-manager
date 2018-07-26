import React, { Component } from 'react';
import { TextField } from '@material-ui/core';

class DatePicker extends Component {
  static propType = {
    
  }

  render () {
    const { className, label, input, meta: { touched, error } } = this.props;
    return (
      <div>
        <TextField
          label={label}
          type="date"
          defaultValue="0000-00-00"
          className={className}
          helperText={touched && error}
          error={error && touched}
          {...input}
          InputLabelProps={{
            shrink: true,
          }}
        />
      </div>
    )
  };
};

export default DatePicker;
