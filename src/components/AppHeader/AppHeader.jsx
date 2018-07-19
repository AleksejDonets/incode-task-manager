import React from 'react';
import PropTypes from 'prop-types';
import { AppBar, Toolbar, Button } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { NavLink } from 'react-router-dom';
import styles from './styles';

const AppHeader = ({ classes, idUser }) => {
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <NavLink to='/' className={classes.noDecoration} >
            <Button className={classes.navButton}>
              Profile
            </Button>
          </NavLink>
          <NavLink to={`/tasks/${idUser}`} className={classes.noDecoration}>
            <Button className={classes.navButton}>
              My Tasks
            </Button> 
          </NavLink>
          <NavLink to='/board' className={classes.noDecoration}>
            <Button className={classes.navButton}>
              Board
            </Button> 
          </NavLink>
        </Toolbar>
      </AppBar>
    </div>
  );
};

AppHeader.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AppHeader);
