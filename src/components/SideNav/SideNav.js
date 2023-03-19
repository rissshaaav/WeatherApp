import React from 'react';
import { Stack, Box } from '@mui/material';
import './SideNav.css';
import Settings from '@mui/icons-material/Settings';
import CloudIcon from '@mui/icons-material/Cloud';
import ListIcon from '@mui/icons-material/List';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';
const SideNav = ({className}) => {
  return (
    <div className={`${className}`} style={{width: 'fit-content'}}>
        <Stack className='sidenavStack'
            direction="column"
            justifyContent="flex-start"
            alignItems="center"
            spacing={5}
            backgroundColor="#202b3b"
            height="100%"
            width="100px"
            borderRadius="20px"
            
        >
            <Box sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginBottom: '50px'}}>
                <BeachAccessIcon  style={{fontSize: '50px'}}/>
            </Box>
            <Box sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                <CloudIcon  style={{fontSize: '30px'}}/>
                <Box>Weather</Box>
            </Box>
            <Box sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                <ListIcon  style={{fontSize: '30px'}}/>
                <Box>Cities</Box>
            </Box>
            <Box sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                <Settings  style={{fontSize: '30px'}}/>
                <Box>Settings</Box>    
            </Box>
        </Stack>
      
    </div>
  )
}

export default SideNav;
