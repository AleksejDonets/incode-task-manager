import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import AccountCircle from '@material-ui/icons/AccountCircle';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';

const AppHeader = ({ classes }) => {
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <AccountCircle />
        </Toolbar>
      </AppBar>
    </div>
  );
};

AppHeader.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AppHeader);
