import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Card, Typography, CardActions, Button, CardContent, withStyles } from '@material-ui/core';
import { CustomInput } from '../CustomInput';
import styles from '../SignForm/styles';

const LoginForm = ({ handleSubmit,classes, onSubmitHandler, errorMessage }) => {

  return (
    <form onSubmit={handleSubmit(onSubmitHandler)}>
      <Card className={classes.containerForm}>
        
        <CardContent className={classes.contentForm}>
          <Typography component="div" className={classes.errorForm}>
            {errorMessage.message}
          </Typography>
          <Typography component="h4" variant="display1">
            Login
          </Typography>
          <Typography component="div">
            <Field
              name="login"
              component={CustomInput}
              className={classes.inputForm}
              type="text"
              label="Enter login"
            />
          </Typography>
          <Typography component="div">
            <Field
              name="password"
              component={CustomInput}
              className={classes.inputForm}
              type="password"
              label="Enter you password"
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
            LogIn
          </Button>
         
        </CardActions>
       
      </Card>
    </form>
  )
};

export default reduxForm({
  form: 'loginForm',
})(withStyles(styles)(LoginForm));
