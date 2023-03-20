import React from 'react';
import ThermostatOutlinedIcon from '@mui/icons-material/ThermostatOutlined';
import InvertColorsOutlinedIcon from '@mui/icons-material/InvertColorsOutlined';
import AirOutlinedIcon from '@mui/icons-material/AirOutlined';
import Brightness7OutlinedIcon from '@mui/icons-material/Brightness7Outlined';
import { Grid, Stack, Box, Button } from '@mui/material';

const AirConditions = ({className, real_feel, wind_speed, uv_index, chance_of_rain}) => {
    const styles = () => {
        return{
            fontSize: '32px',
            fontWeight: '600',
            color: '#c4cad3'
        }
    }
    return (
        <>
            <Grid container  className={`${className}`} style={{backgroundColor: '#202b3b', borderRadius: '20px'}}>

                <Grid item xs={12}>

                    <Stack
                        direction="row"
                        spacing={2}
                        sx={{display: 'flex', justifyContent: 'space-between'}}
                        >
                        <Box>AIR CONDITIONS</Box>
                        <Button variant='contained' size='small' sx={{borderRadius: '20px'}}>See More</Button>
                    </Stack>

                </Grid>
                <Grid item xs={6}>

                    <Stack
                        direction='column'
                        spacing={2}
                        >

                        <Box sx={{display: 'flex', justifyContent: 'flex-start', alignItems: 'flex-start'}}>
                                <ThermostatOutlinedIcon/>
                            <Box sx={{display: 'inline-block', ml: '8px'}}>
                                <span>Real Feel</span>
                                <Box sx={styles()}>{real_feel}°</Box>
                            </Box>
                        </Box>

                        <Box sx={{display: 'flex', justifyContent: 'flex-start', alignItems: 'center', alignItems: 'flex-start'}}>
                                <InvertColorsOutlinedIcon/>
                            <Box sx={{display: 'inline-block', ml: '8px'}}>
                                <span>Chance of Rain</span>
                                <Box sx={styles()}>{chance_of_rain}%</Box>
                            </Box>
                        </Box>

                    </Stack>

                </Grid>
                <Grid item xs={6}>

                    <Stack
                        direction='column'
                        spacing={2}
                        >

                        <Box sx={{display: 'flex', justifyContent: 'flex-start', alignItems: 'center', alignItems: 'flex-start'}}>
                                <AirOutlinedIcon/>
                            <Box sx={{display: 'inline-block', ml: '8px'}}>
                                <span>Wind</span>
                                <Box sx={styles()}>{wind_speed} m/s</Box>
                            </Box>
                        </Box>

                        <Box sx={{display: 'flex', justifyContent: 'flex-start', alignItems: 'center', alignItems: 'flex-start'}}>
                                <Brightness7OutlinedIcon/>
                            <Box sx={{display: 'inline-block', ml: '8px'}}>
                                <span>UV Index</span>
                                <Box sx={styles()}>{uv_index}</Box>
                            </Box>
                        </Box>

                    </Stack>

                </Grid>

            </Grid>
        </>
    )
}

export default AirConditions
