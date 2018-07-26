import React from 'react';
import TextField from '@material-ui/core/TextField';

const CustomInput = ({ label, type,  className, input, meta: { touched, error }}) => {
  return (
    <div>
      <TextField
        className={className}
        helperText={touched && error}
        error={error && touched}
        label={ label }
        type={ type }
        {...input}
      />
    </div>
  );
};

export default CustomInput;
