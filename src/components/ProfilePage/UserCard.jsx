import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const styles = {
    card: {
      maxWidth: 600,
    },
    media: {
      height: 0,
      paddingTop: '56.25%', // 16:9
    },
    info: {
        flexGrow: 1
    },
    bold:{
        fontWeight:' bold'
    }
  };

const UserCard = (props) => {
    const {classes} = props;
    const {user} = props;
    return(
        <Card className={classes.card}>

            <CardContent>
                 <Typography gutterBottom variant="headline" component="h2" >
                    {user.first_name}
                </Typography>
                <Typography component="p">
                    <Typography component="span" className={classes.bold}> Email: </Typography>{user.email}
                    
                </Typography>
                <Typography component="p">
                    {user.date_birth}
                </Typography>
                <Typography component="p">
                    {user.list_of_skils}
                </Typography> 
                <CardActions>
                    <Button variant="contained" size="medium" color="primary" className={classes.button}>
                        Edit
                    </Button>
                </CardActions>
            </CardContent>
        </ Card>
    )
}

export default withStyles(styles)(UserCard);
