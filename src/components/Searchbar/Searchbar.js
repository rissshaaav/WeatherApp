import React from 'react';
import TextField from '@mui/material/TextField';
const Searchbar = ({className}) => {
  const styles = {
    color: '#8d949d', // your desired color here
  };
  return (
    <>
        <TextField
            className={`${className}`}
            id="demo-helper-text-aligned-no-helper"
            label="Search cities...."
            fullWidth
            style={{backgroundColor:"#202b3b", width: '100%', height: 'fit-content', borderRadius: '20px'}}
            InputProps={{style: styles}}
            InputLabelProps={{style: styles}}
        />
    </>
  )
}

export default Searchbar
