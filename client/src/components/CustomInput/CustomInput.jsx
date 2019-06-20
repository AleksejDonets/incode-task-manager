import React from 'react';
import TextField from '@material-ui/core/TextField';

const CustomInput = ({ label, rows, type, className, input, multiline, meta: { touched, error }}) => {
  return (
    <div>
      <TextField
        className={className}
        helperText={touched && error}
        error={error && touched}
        label={label}
        type={type}
        multiline={multiline}
        rows={rows}
        {...input}
      />
    </div>
  );
};

export default CustomInput;
