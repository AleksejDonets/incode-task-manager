import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardActions, CardContent, Button, Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import Edit from '@material-ui/icons/Edit';
import styles from './styles';

const UserCard = ({ classes, user, toggleEdit }) => {
  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography gutterBottom variant="headline" component="h2">
          {user.first_name}
        </Typography>
        <Typography component="p">
          {user.email}
        </Typography>
        <Typography component="p">
          {user.date_birth}
        </Typography>
        <Typography component="p">
          {user.list_of_skils}
        </Typography>
        <CardActions className={classes.alItem}>
          <Button variant="contained" color="primary" onClick={toggleEdit} className={classes.button}>
            <Edit />
          </Button>
        </CardActions>
      </CardContent>
    </Card>
  );
};

UserCard.propTypes = {
  user: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired,
  toggleEdit: PropTypes.func.isRequired,
};

export default withStyles(styles)(UserCard);
