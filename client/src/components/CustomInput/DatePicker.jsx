import React from 'react';
import { TextField } from '@material-ui/core';

const DatePicker = ({className, label, input, meta: { touched, error }}) => {
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
}
export default DatePicker;
