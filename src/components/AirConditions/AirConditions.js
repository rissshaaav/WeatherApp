import React from 'react';
import ThermostatOutlinedIcon from '@mui/icons-material/ThermostatOutlined';
import InvertColorsOutlinedIcon from '@mui/icons-material/InvertColorsOutlined';
import AirOutlinedIcon from '@mui/icons-material/AirOutlined';
import Brightness7OutlinedIcon from '@mui/icons-material/Brightness7Outlined';
import { Grid, Stack, Box, Button } from '@mui/material';

const AirConditions = ({className}) => {
    return (
        <div className={`${className}`} style={{backgroundColor: '#202b3b', borderRadius: '20px'}}>
            <Grid container>

                <Grid item xs={12}>

                    <Stack
                        direction="row"
                        spacing={2}
                        sx={{display: 'flex', justifyContent: 'space-between'}}
                        >
                        <Box>AIR CONDITIONS</Box>
                        <Button variant='contained'>See More</Button>
                    </Stack>

                </Grid>
                <Grid item xs={6}>

                    <Stack
                        direction='column'
                        spacing={2}
                        >

                        <Box sx={{display: 'flex', justifyContent: 'flex-start', alignItems: 'center'}}>
                                <ThermostatOutlinedIcon/>
                            <Box sx={{display: 'inline-block'}}>
                                <span>Real Feel</span>
                                <Box>30°</Box>
                            </Box>
                        </Box>

                        <Box sx={{display: 'flex', justifyContent: 'flex-start', alignItems: 'center'}}>
                                <InvertColorsOutlinedIcon/>
                            <Box sx={{display: 'inline-block'}}>
                                <span>Chance of Rain</span>
                                <Box>0%</Box>
                            </Box>
                        </Box>

                    </Stack>

                </Grid>
                <Grid item xs={6}>

                    <Stack
                        direction='column'
                        spacing={2}
                        >

                        <Box sx={{display: 'flex', justifyContent: 'flex-start', alignItems: 'center'}}>
                                <AirOutlinedIcon/>
                            <Box sx={{display: 'inline-block'}}>
                                <span>Wind</span>
                                <Box>0.2 km/h</Box>
                            </Box>
                        </Box>

                        <Box sx={{display: 'flex', justifyContent: 'flex-start', alignItems: 'center'}}>
                                <Brightness7OutlinedIcon/>
                            <Box sx={{display: 'inline-block'}}>
                                <span>UV Index</span>
                                <Box>3</Box>
                            </Box>
                        </Box>

                    </Stack>

                </Grid>

            </Grid>
        </div>
    )
}

export default AirConditions
