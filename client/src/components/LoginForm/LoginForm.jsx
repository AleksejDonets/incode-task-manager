import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Card, Typography, CardActions, Button, CardContent } from '@material-ui/core';
import { CustomInput } from '../CustomInput';

const LoginForm = ({ handleSubmit, onSubmitHandler }) => {
  return (
    <form onSubmit={handleSubmit(onSubmitHandler)}>
      <Card>
        <CardContent>
          <Typography component="div">
            <Field
              name="login"
              component={CustomInput}
              type="email"
            />
          </Typography>
          <Typography component="div">
            <Field
              name="password"
              component={CustomInput}
              type="password"
            />
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            >
            Sign In
          </Button>
        </CardActions>
      </Card>
    </form>
  )
};

export default reduxForm({
  form: 'loginForm',
})(LoginForm);
