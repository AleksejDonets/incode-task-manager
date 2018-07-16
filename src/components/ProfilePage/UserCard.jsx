import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';


const styles = {

    bigAvatar: {
        width: 150,
        height:150
    },
}

const UserCard = (props) => {
    const {classes} = props;
    const {user} = props;
    console.log(user);
    return(
        <Avatar src={user.avatar} className={classes.bigAvatar}/>
    )
}

export default withStyles(styles)(UserCard);
