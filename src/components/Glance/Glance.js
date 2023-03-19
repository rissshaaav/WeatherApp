import React from 'react';
import rainy from '../../assets/rainy.png';
import stormy from '../../assets/stormy.png';
import sunny from '../../assets/sunny.png';
import cloudNoSun from '../../assets/cloudNoSun.png';
import cloudWithSun from '../../assets/cloudWithSun.png';
import { Stack, Box} from '@mui/material';

const Glance = ({className}) => {
    const city = 'Madrid';
    const cityTemp = 31;
  return (
    <div className={`${className}`}>
        <Box sx={{display: 'flex', justifyContent: 'space-between'}}>
            <Stack
                direction='column'
                spacing={2}
                sx={{display: 'flex', flexDirection: 'column' ,justifyContent: 'space-between'}}
                >
                    <Box>{city}</Box>
                    <Box>{`${cityTemp}°`}</Box>
            </Stack>
            <Stack
                direction='column'
                spacing={2}
                >
                    <img src={sunny} alt='sunny' style={{height: '100px'}}/>
            </Stack>
        </Box>
    </div>
  )
}

export default Glance
