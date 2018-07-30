import React from 'react';
import { Select, MenuItem, InputLabel, FormControl } from '@material-ui/core';

const UniSelect = (
  { 
    className,
    handleSelect,
    admin,
    status,
    performerList,
    selectName,
    label,
    meta: { touched, error },
    input,
  }) => {
  const statusList = ['To Do', 'In Progress', 'Peer Review', 'Done'];
  const items = performerList || statusList;

  return (
    <FormControl >
      <InputLabel htmlFor={`${selectName}`}>
        { label }
      </InputLabel>
      <Select
        className={className}
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
      </FormControl>
  );
};

export default UniSelect;
