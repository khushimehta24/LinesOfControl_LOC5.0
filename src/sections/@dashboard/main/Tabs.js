import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { CardMedia, Grid, CardContent, Button } from '@mui/material';
import GetServices from 'src/services/GetServices';
import userService from 'src/services/userService';

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

export default function BasicTabs({ crea, id }) {
    const [value, setValue] = React.useState(0);
    console.log(crea, id)
    const [userEvents, setUserEvents] = useState([])
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    useEffect(() => {
        const func = async () => {
            await userService.getUserEvents(crea[id].id)
                .then((res) => {

                    console.log(res.data.all_events_user)
                    setUserEvents(res.data.all_events_user)
                })
            await userService.getRentals(crea[id].id).then((res) => {
                console.log(res.data)
            })
        }
        func()
    }, [])

    const registerUser = async (id) => {
        console.log(id)
        await userService.eventRegister({ 'r_id': id })
            .then((res) => {
                console.log(res.data)
            })
    }

    return (
        <Box sx={{ width: '100%', padding: '0' }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={value} sx={{ '& .Mui-selected': { color: '#EF60E5 !important' }, padding: '0', '& .MuiTabs-indicator': { backgroundColor: '#EF60E5' } }} onChange={handleChange} aria-label="basic tabs example">
                    <Tab label='PortFolio'   {...a11yProps(0)} />
                    <Tab label='Events' {...a11yProps(1)} />
                    <Tab label='Rent' {...a11yProps(2)} />
                </Tabs>
            </Box>
            <TabPanel value={value} index={0} sx={{ padding: '0' }}>
                <Grid container spacing={2}>
                    {
                        [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((item) => {
                            return <Grid item md={4}>
                                <CardMedia sx={{ width: '150px', height: '135px', borderRadius: '5px' }} component='img' image={`https://source.unsplash.com/random/${item}`} />
                            </Grid>
                        })
                    }
                </Grid>
            </TabPanel>
            <TabPanel value={value} index={1}>
                <Grid container>

                    {
                        userEvents.map((event) => {
                            return <Grid item md={6}>

                                <CardContent sx={{ bgcolor: 'white', padding: '10px', borderRadius: '10px' }}>
                                    <Grid container columnSpacing={3} sx={{ display: 'flex', alignItems: 'center', marginBottom: '3%' }}>
                                        <Grid item>
                                            <CardMedia component='img' image={event.img} sx={{ width: '70px', height: '70px', borderRadius: '50px' }} />
                                        </Grid>
                                        <Grid item>
                                            <h2 style={{ fontFamily: 'Poppins' }}>{event.name.length > 15 ? event.name.slice(0, 15) + '...' : event.name}</h2>
                                        </Grid>
                                    </Grid>
                                    <h3 style={{ margin: '0', padding: '0' }}>{event.date} - {event.venue}</h3>
                                    <p style={{ fontSize: '12px', color: '#D2D2D2', padding: '0', marginBottom: '0' }}>Hosted By {event.creator.name}</p>
                                    <CardMedia component='img' image={event.creator.image} sx={{ width: '30px', border: '2px solid black', height: '30px', borderRadius: '50px' }} />
                                    <Button sx={{
                                        width: '100%', bgcolor: 'black', color: 'white', marginTop: '10%', "&:hover": {
                                            backgroundColor: 'black'
                                        }
                                    }} onClick={() => { registerUser(event.id) }} >Register</Button>

                                </CardContent>
                            </Grid>
                        })
                    }
                </Grid>
            </TabPanel>
            <TabPanel value={value} index={2}>
                <Grid container>
                    {
                        userEvents.map((rent) => {
                            return <Grid item md={6}>
                                <CardContent sx={{ bgcolor: 'white', padding: '10px', borderRadius: '10px' }}>
                                    <Grid container columnSpacing={1} sx={{ display: 'flex', alignItems: 'center', marginBottom: '3%' }}>
                                        <Grid item>
                                            <CardMedia component='img' image={JSON.parse(localStorage.getItem('lfuser')).image} sx={{ width: '30px', height: '30px', borderRadius: '50px' }} />
                                        </Grid>
                                        <Grid item>
                                            <h4 style={{ fontSize: '14px', color: 'black', margin: '0', padding: '0' }}>{JSON.parse(localStorage.getItem('lfuser')).name}</h4>
                                            <p style={{ fontSize: '10px', color: '#c2c2c2', margin: '0', padding: '0' }}>From   -   To</p>
                                        </Grid>
                                    </Grid>
                                    {/* {

                                        json.img === '' ? <Box sx={{ width: '295px', height: '250px', bgcolor: '#D2D2D2' }} /> : <CardMedia component='img' image={json.image} sx={{ width: '295px', height: '295px' }} />

                                    } */}
                                    <h3 style={{ fontFamily: 'Poppins', margin: '0', padding: '0' }}>Device Name</h3>
                                    <p style={{ fontSize: '10px', color: '#c2c2c2', margin: '0', padding: '0' }}> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab voluptatum neque ullam ipsa odit repudiandae </p>

                                    <Button sx={{ width: '100%', bgcolor: 'black', color: 'white', marginTop: '10%', "&:hover": { backgroundColor: 'black' } }} >Rent</Button>

                                </CardContent>
                            </Grid>
                        })
                    }
                </Grid>
            </TabPanel>
        </Box>
    );
}