import React from 'react';
import rainy from '../../assets/rainy.png';
import stormy from '../../assets/stormy.png';
import sunny from '../../assets/sunny.png';
import cloudNoSun from '../../assets/cloudNoSun.png';
import cloudWithSun from '../../assets/cloudWithSun.png';
import { Stack, Box} from '@mui/material';

const Glance = ({className, city, temp}) => {
    // const city = 'Madrid';
    // const cityTemp = 31;
  return (
    <>
        <Box className={`${className}`} sx={{display: 'flex', justifyContent: 'space-around'}}>
            <Stack
                direction='column'
                
                sx={{display: 'flex', flexDirection: 'column' ,justifyContent: 'space-between'}}
                >
                    <Box sx={{fontSize: '40px', fontWeight: '600', color: '#f0f1f1'}}>{city}</Box>
                    <Box sx={{fontSize: '64px', fontWeight: '600', color: '#f0f1f1'}}>{temp}°</Box>
            </Stack>
            <Stack
                direction='column'
                spacing={2}
                >
                    <img src={sunny} alt='sunny' style={{height: '130px'}}/>
            </Stack>
        </Box>
    </>
  )
}

export default Glance
