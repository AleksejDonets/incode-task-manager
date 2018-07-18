import React from 'react';
import TextField from '@material-ui/core/TextField';

const CustomInput = ({ className, input , meta: {touched, error}}) => {
  return (
    <div>
      <TextField
        className={className}
        multiline
        helperText={touched && error}
        error={error && touched}
        {...input}
      />
    </div>
  );
};

export default CustomInput;
