import React from 'react';
import rainy from '../../assets/rainy.png';
import stormy from '../../assets/stormy.png';
import sunny from '../../assets/sunny.png';
import cloudNoSun from '../../assets/cloudNoSun.png';
import cloudWithSun from '../../assets/cloudWithSun.png';
import { Stack, Divider, Box, Container } from '@mui/material';

const TodaysForecast = ({className}) => {
    const todaysForecastList = [
        {
            time: '6:00 AM',
            icon: <img src={cloudNoSun} alt='cloudy with no sun' style={{height: '40px'}}/>,
            temp: '25°'
        },
        {
            time: '9:00 AM',
            icon: <img src={cloudWithSun} alt='cloudy with sun' style={{height: '40px'}}/>,
            temp: '28°'
        },
        {
            time: '12:00 PM',
            icon: <img src={sunny} alt='sunny' style={{height: '40px'}}/>,
            temp: '33°'
        },
        {
            time: '3:00 PM',
            icon: <img src={sunny} alt='sunny' style={{height: '40px'}}/>,
            temp: '32°'
        },
        {
            time: '6:00 PM',
            icon: <img src={sunny} alt='sunny' style={{height: '40px'}}/>,
            temp: '34°'
        },
        {
            time: '9:00 PM',
            icon: <img src={cloudWithSun} alt='cloudy with sun' style={{height: '40px'}}/>,
            temp: '30°'
        },
    ]
  return (
    <div className={`${className}`} style={{backgroundColor: '#202b3b', borderRadius: '20px', display: 'flex', flexDirection: 'column', justifyContent: 'space-around'}}>
        <Box>Today's Forecast</Box>
        <Stack
            direction="row"
            divider={<Divider orientation="vertical" color='#7f8690' flexItem />}
            spacing={2}
            justifyContent='space-evenly'
        >
            {
                todaysForecastList.map((item, index)=>{
                    return(
                        <Box key={index}>
                            <Container sx={{display: 'flex', flexDirection: 'column', alignItems: 'center'}} disableGutters= {true}>
                                <Box sx={{fontWeight: '600', fontSize: '16px'}}>{item.time}</Box>
                                <Box sx={{m: '10px'}}>{item.icon}</Box>
                                <Box sx={{fontWeight: '600', fontSize: '24px', color: '#dde0e4'}}>{item.temp}</Box>
                            </Container>
                        </Box>
                    )
                })
            }
        </Stack>
    </div>
  )
}

export default TodaysForecast;
