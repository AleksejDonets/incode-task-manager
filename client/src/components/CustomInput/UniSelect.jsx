import React, { Fragment } from 'react';
import { Select, MenuItem, InputLabel } from '@material-ui/core';

const UniSelect = (
  { 
    handleSelect,
    admin,
    status,
    performerList,
    selectName,
    selectId ,
    label,
    defaultValue,
    meta: { touched, error },
    input
  }) => {
  const statusList = ['To Do', 'In Progress', 'Peer Review', 'Done'];
  const items = performerList || statusList;

  return (
    <Fragment>
      <InputLabel htmlFor="status">
        { label }
      </InputLabel>
      <Select
        error={error && touched}
        value={ status }
        onChange={(event) =>handleSelect(event)}
        disabled={admin}
        {...input}
        inputProps={
          {
            name:`${selectName}`,
            id: `${selectName} `,
          }
          
        }
      >
        {
          items.map(item => <MenuItem value={item._id || item} key={ item._id || item }>{ item.name || item }</MenuItem>)
        }
      </Select>
    </Fragment>
  );
};

export default UniSelect;
