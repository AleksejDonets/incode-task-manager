import React, { Fragment } from 'react';
import { Select, MenuItem, InputLabel } from '@material-ui/core';

const UniSelect = (
  { 
    handleSelect,
    admin,
    status,
    preferList,
    selectName,
    selectId ,
    label,
    defaultValue,
  }) => {
  const statusList = ['To Do', 'In Progress', 'Peer Review', 'Done'];
  const item = preferList || statusList;
  return (
    <Fragment>
      <InputLabel htmlFor="status">
        { label }
      </InputLabel>
      <Select
        value={defaultValue || status}
        onChange={(event) =>handleSelect(event)}
        disabled={admin}
        inputProps={
          {
            name:`${selectName}`,
            id: `${selectName} `,
          }
        }
      >
        {
          item.map(item => <MenuItem value={item} key={ item._id ? item._id : item }>{ item }</MenuItem>)
        }
      </Select>
    </Fragment>
  );
};

export default UniSelect;
