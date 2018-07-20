import React from 'react';
import { Select, MenuItem } from '@material-ui/core';

const statusList = ['To Do', 'In Progress', 'Peer Review', 'Done'];

const TaskItemStatus = ({ task, handleChange, admin  }) => {
  return (
    <Select
      value = { this.state.status }
      onChange = { this.handleChange }
      disabled = { !admin }
      inputProps={{
        name: 'status',
      }}
    >
    {
      statusList.map((item, item)=> <MenuItem value={item} key={item}>{item}</MenuItem>)
    }
    </Select>
  )
}