import React, { Component }from 'react';
import { Field, reduxForm } from 'redux-form';
import { Card, Typography, CardActions, Button, CardContent, withStyles } from '@material-ui/core';
import { CustomInput, UniSelect } from '../CustomInput';
import styles from './styles';

class CreateTaskForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      status: '' ,
      prefer: '',
    }

    this.handleChangeSelectVaule = this.handleChangeSelectVaule.bind(this);
  }

  handleChangeSelectVaule(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  render() {
    const { status, prefer } = this.state;
    return (
      <form>
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
                name="taskPrefer"
                component={UniSelect}
                
                type="text"
                label="Prefer"
                selectName = "prefer"
                status={prefer}
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


export default reduxForm({
  form: 'CreateTaskForm',
})(withStyles(styles)(CreateTaskForm));
