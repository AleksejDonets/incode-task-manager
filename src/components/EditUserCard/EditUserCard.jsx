import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { withStyles } from '@material-ui/core/styles';
import { Card, Typography, CardActions, Button, CardContent } from '@material-ui/core';
import { CustomInput } from '../CustomInput';
import validate from '../../utils/validate';
import styles from './styles';

const EditUserCard = ({ handleSubmit, classes, onSubmitHandler }) => {
  return (
    <form onSubmit={handleSubmit(onSubmitHandler)}>
      <Card className={classes.editForm}>
        <CardContent className={classes.content}>
          <Typography component="div">
            <Field
              name="first_name"
              component={CustomInput}
              type="text"
              className={classes.field}
            />
          </Typography>
          <Typography component="div">
            <Field
              name="email"
              component={CustomInput}
              type="text"
              className={classes.field}
            />
          </Typography>
          <Typography component="div">
            <Field
              name="date_birth"
              component={CustomInput}
              type="text"
              className={classes.field}
            />
          </Typography>
          <Typography component="div">
            <Field
              name="list_of_skils"
              component={CustomInput}
              type="text"
              className={classes.field}
            />
          </Typography>
        </CardContent>
        <CardActions className={classes.alItem}>
          <Button variant="contained" type="submit" color="primary" className={classes.button}>
            Save
          </Button>
        </CardActions>
      </Card>
    </form>

  );
};

export default reduxForm({
  form: 'editForm',
  validate,
  enableReinitialize: true,
})(withStyles(styles)(EditUserCard));
