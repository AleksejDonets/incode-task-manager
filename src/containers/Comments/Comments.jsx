import React from 'react';
import { Typography, Card, CardContent, List, ListItem, ListItemText, Divider } from '@material-ui/core';
import { AddComment } from '../AddComment';

const Comments = ({ messages, addComment }) => {
  return (
    <Card>
      <CardContent>
        <Typography variant="headline">Comments</Typography>
          <List>
            {messages.map(message => {
              return (
                <ListItem key={message.createdAt}>
                  <ListItemText>
                    <Typography variant="subheading" color="secondary">
                      {message.author}
                    </Typography>
                    <Typography variant="body1">{message.text}</Typography>
                    <Typography variant="caption">{message.createdAt}</Typography>
                  </ListItemText>
                </ListItem>
              )
            })}
          </List>
          <Divider />
        <AddComment  submitHandler={addComment}/>
      </CardContent>
    </Card>
  )
}



export default Comments;
