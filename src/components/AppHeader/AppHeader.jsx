import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import AccountCircle from '@material-ui/icons/AccountCircle';
import { withStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import styles from './styles';

const AppHeader = ({ classes }) => {
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Link to='/tasks/'>dsds</Link>
          <Link to='/'>
            <AccountCircle />
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
};

AppHeader.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AppHeader);
