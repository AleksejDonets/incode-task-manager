import React, { Fragment } from 'react';
import { Select, MenuItem, InputLabel } from '@material-ui/core';



const TaskStatus = ({ onChange, admin, status }) => {
  const statusList = ['To Do', 'In Progress', 'Peer Review', 'Done'];
  return (
    <Fragment>
      <InputLabel htmlFor="status">Status: </InputLabel>
      <Select
        value = {status}
        onChange = {(event) => onChange(event)}
        disabled={admin}
        inputProps={{
          name: 'status',
          id: 'status',
        }}
      >
        {
          statusList.map( item => <MenuItem value={item} key={item}>{item}</MenuItem>)
        }
      </Select>
    </Fragment>
    
  )
}

export default TaskStatus;
