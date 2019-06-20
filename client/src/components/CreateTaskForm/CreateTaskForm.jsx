import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm, formValueSelector } from 'redux-form';
import {
  Card, Typography, CardActions, Button, CardContent, withStyles,
} from '@material-ui/core';
import { CustomInput, UniSelect } from '../CustomInput';
import styles from './styles';
import validate from '../../utils/validate';

class CreateTaskForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: '---',
      performer: '---',
    };
    this.handleChangeSelectVaule = this.handleChangeSelectVaule.bind(this);
  }

  handleChangeSelectVaule(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  render() {
    const { status, performer } = this.state;
    const {
      performerList, handleSubmit, onSubmitHandler, classes, message,
    } = this.props;
    return (
      <form onSubmit={handleSubmit(onSubmitHandler)}>
        <Card className={classes.formWrap}>
          <CardContent className={classes.container}>
            {message
              ? (
                <Typography component="div" className={classes.success}>
                  <Typography component="h3" className={classes.successText}>
                    {message}
                  </Typography>
                </Typography>
              )
              : null
            }
            <Typography component="div">
              <Field
                name="title"
                component={CustomInput}
                className={classes.input}
                type="text"
                label="Title task"
              />
            </Typography>
            <Typography component="div">
              <Field
                name="description"
                component={CustomInput}
                multiline
                rows={2}
                className={classes.input}
                type="text"
                label="Description"
              />
            </Typography>
            <Typography component="div" className={classes.selectWrap}>
              <Field
                handleSelect={this.handleChangeSelectVaule}
                name="taskStatus"
                component={UniSelect}
                className={classes.select}
                type="text"
                label="Status"
                selectName="status"
                status={status}
              />
              <Field
                handleSelect={this.handleChangeSelectVaule}
                name="taskPerformer"
                component={UniSelect}
                type="text"
                label="Performer"
                selectName="performer"
                className={classes.select}
                status={performer}
                performerList={performerList}
              />
            </Typography>
            <CardActions>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
              >
                Create
              </Button>
            </CardActions>
          </CardContent>
        </Card>
      </form>
    );
  }
}

CreateTaskForm = reduxForm({
  form: 'CreateTaskForm',
  validate,
})(CreateTaskForm);

const selector = formValueSelector('CreateTaskForm');
CreateTaskForm = connect(
  (state) => {
    const taskStatusValue = selector(state, 'status');
    const taskPerformerVlaue = selector(state, 'performer');
    return {
      taskStatusValue,
      taskPerformerVlaue,
    };
  },
)(CreateTaskForm);
export default withStyles(styles)(CreateTaskForm);
