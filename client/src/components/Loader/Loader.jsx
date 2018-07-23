import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';

const Loader = ({classes}) => {
  return( 
    <CircularProgress  className={classes.loader}/> 
  )
}
export default withStyles(styles)(Loader);
