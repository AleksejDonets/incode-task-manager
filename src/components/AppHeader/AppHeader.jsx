import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import AccountCircle from '@material-ui/icons/AccountCircle';
import { withStyles } from '@material-ui/core/styles';

const styles = {
    root: {
      flexGrow: 1,
    },
  };

const AppHeader = (props) => {
    const { classes } = props;
    const {name} = props;
    return (
      <div className={classes.root}>
        <AppBar position="static" >
          <Toolbar>
            <Typography variant="title" color="inherit" className={classes.root}>
                {name}
            </Typography>
            <AccountCircle />
          </Toolbar>
        </AppBar>
      </div>
    );
}

export default withStyles(styles)(AppHeader);