import * as React from 'react';
import Select, { SelectChangeEvent } from '@mui/material/Select';

export default function select(){
    const handleChange = (event: SelectChangeEvent) => {
      };
    return(
        <>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          onChange={handleChange}
        ></Select>

        </>
    )
}