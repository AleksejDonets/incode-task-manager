import React, { Component }from 'react';
import { Field, reduxForm,  formValueSelector } from 'redux-form';
import { Card, Typography, CardActions, Button, CardContent, withStyles } from '@material-ui/core';
import { CustomInput, UniSelect } from '../CustomInput';
import styles from './styles';
import { connect } from 'react-redux';

class CreateTaskForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: '---' ,
      performer: '---',
    }
    this.handleChangeSelectVaule = this.handleChangeSelectVaule.bind(this);
  }

  handleChangeSelectVaule(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  render() {
    const { status, performer } = this.state;
    const { performerList, handleSubmit, onSubmitHandler } = this.props;
    return (
      <form onSubmit={handleSubmit(onSubmitHandler)}>
        <Card>
          <CardContent>
            <Typography component="div">
              <Field
                name="title"
                component={CustomInput}
                type="text"
                label="Title task"
              />
            </Typography>
            <Typography component="div">
              <Field
                name="description"
                component={ CustomInput }
                multiline
                type="text"
                label="Description"
              />
            </Typography>
            <Typography component="div">
              <Field
                handleSelect={this.handleChangeSelectVaule}
                name="taskStatus"
                component={UniSelect}
                type="text"
                label="Status"
                selectName = "status"
                status={status}
              />
              
            </Typography>
            <Typography component="div">
              <Field
                handleSelect={this.handleChangeSelectVaule}
                name="taskPerformer"
                component={UniSelect}
                type="text"
                label="Performer"
                selectName = "performer"
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
  form: 'selectingFormValues'
})(CreateTaskForm);

const selector = formValueSelector('CreateTaskForm');
CreateTaskForm = connect(
  state => {
    const taskStatusValue = selector(state, 'status');
    const taskPerformerVlaue = selector(state, 'performer');
    const creatorId = selector(state, 'creator');

    return {
      taskStatusValue,
      taskPerformerVlaue,
    }
  }
)(CreateTaskForm)

export default withStyles(styles)(CreateTaskForm);
