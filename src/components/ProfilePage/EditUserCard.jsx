import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import styles from './styles';

const Input = ({className, input}) => {
 return( <TextField 
    className={className} 
    multiline
    {...input} 
  />)
}

class EditCardUser extends Component {
 
   render(){
     const {classes, } = this.props;
     return(
       <div>
         <form>
          <Card className={classes.editForm}>
            <Typography component="div">
              <Field 
                name="first_name"
                component={Input}
                type="text"
                
              />
              </Typography>
              <Typography component="div">
              <Field 
                name="email"
                component={Input} 
                type="text"
                
                
              />
              </Typography>
              <Typography component="div">
              <Field 
                name="date_birth"
                component={Input}
                type="text"
                
              />
              </Typography>
              <Typography component="div">
              <Field 
                name="list_of_skils"
                component={Input}
                type="text"
                
              />
              </Typography>
              <CardActions className={classes.alItem}>
                <Button variant="contained" type="submit"  color="primary"  className={classes.button}>
                 
                </Button>
              </CardActions>
            </Card>
         </form>
       </div>
     )
   }
};

EditCardUser = reduxForm({
  form:'editForm',
  enableReinitialize : true , 
})(EditCardUser);

EditCardUser = connect(
  state=> ({
    initialValues:state.user.profile
  }),
 
)(EditCardUser)

export default withStyles(styles)(EditCardUser);
