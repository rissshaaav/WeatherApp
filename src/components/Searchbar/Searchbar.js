import React from 'react';
import TextField from '@mui/material/TextField';
const Searchbar = ({className}) => {
  return (
    <div className={`${className}`} style={{backgroundColor:"#202b3b", width: '100%', height: 'fit-content', borderRadius: '20px'}}>
        <TextField
            id="demo-helper-text-aligned-no-helper"
            label="Search cities...."
            fullWidth
        />
    </div>
  )
}

export default Searchbar
