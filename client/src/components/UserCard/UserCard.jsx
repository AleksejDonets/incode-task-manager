import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Card, CardActions, CardContent, IconButton , Typography, Chip } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { Edit, Email, DateRange, List } from '@material-ui/icons';
import styles from './styles';

const UserCard = ({ classes, user, toggleEdit }) => {
  const listSkil = user.listSkils.split(',');
  return (
    <Fragment>
      <Card className={classes.card}>
        <CardContent className={classes.content}>
          <Typography variant="headline" component="h2">
            {user.name}
          </Typography>
          <Typography component="p" variant="subheading" className={classes.fields}>
            <Email className={ classes.icon } />
            {user.email}
          </Typography>
          <Typography component="p" variant="subheading" className={classes.fields}>
            <DateRange className={ classes.icon } />
            {user.birth}
          </Typography>
          <Typography component="div" variant="subheading" className={classes.fields}>
            <List className={ classes.icon } />
            {listSkil.map(item => {
              return (
                <Chip key={item} label={item} className={classes.listSkil} />
              )
            })}
            
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
