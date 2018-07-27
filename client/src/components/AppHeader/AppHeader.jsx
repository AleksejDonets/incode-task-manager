import React from 'react';
import PropTypes from 'prop-types';
import { AppBar, Toolbar, Button } from '@material-ui/core';
import { Add } from '@material-ui/icons';
import { withStyles } from '@material-ui/core/styles';
import { NavLink } from 'react-router-dom';
import { PersonAdd } from '@material-ui/icons';
import styles from './styles';

const AppHeader = ({ classes, idUser, status, logOut, admin }) => {
  if (status) {
    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <div className={classes.grow}>
              <NavLink to="/" className={classes.noDecoration}>
                <Button className={classes.navButton}>
                  Board
                </Button>
              </NavLink>
              <NavLink to={`/user-tasks/${idUser}`} className={classes.noDecoration}>
                <Button className={classes.navButton}>
                  My Tasks
                </Button>
              </NavLink>
              <NavLink to="/profile" className={classes.noDecoration}>
                <Button className={classes.navButton}>
                  Profile
                </Button>
              </NavLink>
            </div>
            
            <NavLink to="/task/create" className={classes.noDecoration}>
              <Button className={classes.navButton}>
                <Add />
                Create Task
              </Button>
            </NavLink>
            <Button onClick={logOut} className={classes.navButton}>
              Logout
            </Button>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <NavLink to="/login" className={classes.noDecoration}>
            <Button className={classes.navButton}>
               LogIn
            </Button>
          </NavLink>
          <NavLink to="/signup" className={classes.noDecoration}>
            <Button className={classes.navButton}>
              <PersonAdd/> 
              Register
            </Button>
          </NavLink>
         </Toolbar> 
      </AppBar>
    </div>
  )

  
};

AppHeader.propTypes = {
  classes: PropTypes.object.isRequired,
  idUser: PropTypes.string,
};

export default withStyles(styles)(AppHeader);
