import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Card, CardActions, CardContent, IconButton , Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { Edit } from '@material-ui/icons';
import styles from './styles';

const UserCard = ({ classes, user, toggleEdit }) => {
  return (
    <Fragment>
      <Card className={classes.card}>
        <CardContent className={classes.content}>
          <Typography variant="headline" component="h2">
            {user.first_name}
          </Typography>
          <Typography component="p" variant="subheading" className={classes.fields}>
            {user.email}
          </Typography>
          <Typography component="p" variant="subheading" className={classes.fields}>
            {user.date_birth}
          </Typography>
          <Typography component="p" variant="subheading" className={classes.fields}>
            {user.list_of_skils}
          </Typography>
        </CardContent>
        <CardActions className={classes.alItem}>
            <IconButton color="primary" onClick={toggleEdit} className={classes.button} component="span">
              <Edit />
            </IconButton >
          </CardActions>
      </Card>
    </Fragment>
  );
};

UserCard.propTypes = {
  user: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired,
  toggleEdit: PropTypes.func.isRequired,
};

export default withStyles(styles)(UserCard);
