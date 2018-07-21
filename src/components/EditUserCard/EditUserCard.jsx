import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import { CustomInput } from '../CustomInput';
import validate from '../../utils/validate';
import styles from './styles';

const EditUserCard = ({ handleSubmit, classes, onSubmitHandler }) => {
  return (
    <form onSubmit={handleSubmit(onSubmitHandler)}>
      <Card className={classes.editForm}>
        <Typography component="div">
          <Field
            name="first_name"
            component={CustomInput}
            type="text"
          />
        </Typography>
        <Typography component="div">
          <Field
            name="email"
            component={CustomInput}
            type="text"
          />
        </Typography>
        <Typography component="div">
          <Field
            name="date_birth"
            component={CustomInput}
            type="text"
          />
        </Typography>
        <Typography component="div">
          <Field
            name="list_of_skils"
            component={CustomInput}
            type="text"
          />
        </Typography>
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
