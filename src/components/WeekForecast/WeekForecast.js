import React from 'react';
import rainy from '../../assets/rainy.png';
import stormy from '../../assets/stormy.png';
import sunny from '../../assets/sunny.png';
import cloudNoSun from '../../assets/cloudNoSun.png';
import cloudWithSun from '../../assets/cloudWithSun.png';
import { Stack, Divider, Box } from '@mui/material';

const WeekForecast = ({className}) => {

    const WeekForecastList = [
        {
            day: 'Mon',
            icon: <img src={sunny} alt='sunny' style={{height: '40px'}}/>,
            weather: 'Sunny',
            maxMinTemp: '36/22'
        },
        {
            day: 'Tue',
            icon: <img src={sunny} alt='sunny' style={{height: '40px'}}/>,
            weather: 'Sunny',
            maxMinTemp: '37/22'
        },
        {
            day: 'Wed',
            icon: <img src={sunny} alt='sunny' style={{height: '40px'}}/>,
            weather: 'Sunny',
            maxMinTemp: '37/22'
        },
        {
            day: 'Thu',
            icon: <img src={cloudNoSun} alt='sunny' style={{height: '40px'}}/>,
            weather: 'Cloudy',
            maxMinTemp: '37/21'
        },
        {
            day: 'Fri',
            icon: <img src={cloudNoSun} alt='sunny' style={{height: '40px'}}/>,
            weather: 'Cloudy',
            maxMinTemp: '37/21'
        },
        {
            day: 'Sat',
            icon: <img src={rainy} alt='sunny' style={{height: '40px'}}/>,
            weather: 'Rainy',
            maxMinTemp: '36/21'
        },
        {
            day: 'Sun',
            icon: <img src={sunny} alt='sunny' style={{height: '40px'}}/>,
            weather: 'Sunny',
            maxMinTemp: '36/21'
        },
    ]

  return (
    <div className={`${className}`} style={{backgroundColor: '#202b3b', borderRadius: '20px'}}>
        <Box>7-day Forecast</Box>
        <Stack
            direction="column"
            divider={<Divider orientation="horizontal" color='#7f8690' flexItem />}
            spacing={2}
        >
            {
                WeekForecastList.map((item, index) => {
                    return(
                        <Box key={index}
                            sx={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center'
                            }}
                        >
                            <span>{item.day}</span>
                            <Box>
                                <span style={{margin: '5px'}}>{item.icon}</span>
                                <span>{item.weather}</span>
                            </Box>
                            <span>{item.maxMinTemp}</span>
                        </Box>
                    )
                })
            }
        </Stack>
    </div>
  )
}

export default WeekForecast;
