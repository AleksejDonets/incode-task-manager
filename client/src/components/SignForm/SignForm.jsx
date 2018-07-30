import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Card, Typography, CardActions, Button, CardContent, withStyles } from '@material-ui/core';
import { CustomInput } from '../CustomInput';
import styles from './styles';

const SignForm = ({ handleSubmit, classes,  onSubmitHandler, errorMessage }) => {
  return (
    <form onSubmit={handleSubmit(onSubmitHandler)}>
      <Card className={classes.containerForm}>
        <CardContent className={classes.contentForm}>
          <Typography component="h4" variant="display1">
            Sign In
          </Typography>
          <Typography component="div" className={classes.errorForm}>
            {errorMessage.message}
          </Typography>
          <Typography component="div">
            <Field
              name="name"
              component={CustomInput}
              className={classes.inputForm}
              type="text"
              label="Enter you name"
              placeholder="Enter you name"
            />
          </Typography>
          <Typography component="div">
            <Field
              name="email"
              component={CustomInput}
              className={classes.inputForm}
              type="email"
              label="Enter you email"
            />
          </Typography>
          <Typography component="div">
            <Field
              name="password"
              component={CustomInput}
              className={classes.inputForm}
              type="password"
              label="Enter you Password"
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
            Register
          </Button>
        </CardActions>
      </Card>
    </form>
  )
};

export default reduxForm({
  form: 'signForm',
})(withStyles(styles)(SignForm));
