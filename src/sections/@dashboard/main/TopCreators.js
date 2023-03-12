import { CardContent, CardMedia, Grid, Drawer, ListItemButton, ListItemText, ListItem, ListItemIcon, Divider, List, Box, Button, Chip, Card, Tab, Tabs } from '@mui/material'
import React, { useEffect, useState } from 'react'
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { TabContext, TabList, TabPanel } from '@mui/lab';
import BasicTabs from './Tabs';
import GetServices from '../../../services/GetServices';
function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}
function TopCreators() {
    const [open, setOpen] = useState(false)
    const toggleDrawer = () => {
        setOpen(!open)
    }
    const [value, setValue] = React.useState(1);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const [crea, setCrea] = useState([])
    const [id, setId] = useState(0)

    useEffect(() => {
        const func = async () => {
            await GetServices.users()
                .then((res) => {
                    setCrea(res.data)
                    console.log(res)
                })
        }
        func()
    }, [])

    const follow = async () => {
        await GetServices.follow({ "main_user": crea[id].id })
            .then((res) => {
                console.log(res)
            })
    }

    return (
        <>
            {
                crea.map((item, index) => {
                    if (index < 4) {
                        return <Grid onClick={() => setId(index)} item md={3}>
                            <CardContent sx={{ bgcolor: 'white', padding: '10px', borderRadius: '5px' }} onClick={() => { toggleDrawer() }}>
                                <Grid container columnSpacing={1}>
                                    <Grid item md={6}>
                                        <CardMedia sx={{ height: '130px', width: '100%', borderRadius: '2.5px' }} component='img' image='https://source.unsplash.com/random/1' />
                                    </Grid>
                                    <Grid item md={6}>
                                        <CardMedia sx={{ height: '130px', width: '100%', borderRadius: '2.5px' }} component='img' image='https://source.unsplash.com/random/2' />
                                    </Grid>
                                    <Grid item md={12} sx={{ marginTop: '-50px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                                        <CardMedia component='img' image='https://source.unsplash.com/random/9' sx={{ height: '70px', width: '70px', borderRadius: '50px', border: '4px solid white' }} />
                                        <h4 style={{ fontFamily: 'Poppins', margin: '0', padding: '0' }}>{item.uid}</h4>
                                        <p style={{ fontSize: '12px', color: '#D2D2D2', margin: '0', padding: '0' }}>{item.city}</p>
                                    </Grid>
                                </Grid>
                            </CardContent>
                        </Grid>
                    }
                })
            }

            {crea.length !== 0 && <Drawer
                anchor='right'
                open={open}
                onClose={() => toggleDrawer()}
                sx={{ padding: '0', '& .MuiDrawer-paper': { borderTopLeftRadius: '50px', borderBottomLeftRadius: '50px', bgcolor: 'white', color: 'white' } }}
            >
                <Box
                    sx={{ width: 500, bgcolor: 'black', padding: '0', '&.css-c8tzl2-MuiPaper-root-MuiDrawer-paper': { borderRadius: '50px' } }}
                    role="presentation"
                >
                    <Grid container columnSpacing={2} sx={{ display: 'flex', width: '100%', padding: '5%', alignItems: 'center' }}>
                        <Grid item >
                            <CardMedia component='img' image={crea[id].image} sx={{ height: '80px', border: '4px solid #DE53D1', width: '80px', borderRadius: '50px' }} />
                        </Grid>
                        <Grid item>
                            <h4 style={{ fontFamily: 'Poppins', margin: '0', padding: '0' }}>{crea[id].name}</h4>
                            <p style={{ fontSize: '12px', color: '#D2D2D2', margin: '0', padding: '0' }}>{crea[id].city}</p>
                            <Chip label="Urban Photographer" size='small' sx={{ backgroundColor: '#EF60E5', color: 'white' }} />
                        </Grid>
                        <Grid container sx={{ padding: '0 5%', display: 'flex', justifyContent: 'space-between', width: '100%', }}>
                            <Grid item md={3} sx={{ marginTop: '5%' }}>
                                <h2 style={{ margin: '0', padding: '0' }}>{crea[id].followers}</h2>
                                <p style={{ fontSize: '12px', color: '#D2D2D2', margin: '0', padding: '0' }}>Followers</p>
                            </Grid>
                            <Grid item md={3} sx={{ marginTop: '5%' }}>
                                <h2 style={{ margin: '0', padding: '0' }}>{crea[id].followers}</h2>
                                <p style={{ fontSize: '12px', color: '#D2D2D2', margin: '0', padding: '0' }}>Followers</p>
                            </Grid>
                            <Grid item md={3} sx={{ marginTop: '5%' }}>
                                <Button onClick={follow} sx={{ background: 'linear-gradient(301.4deg, #452E66 -102.56%, #EF60E5 111.8%)', borderRadius: '50px', color: 'white', padding: '10% 25%' }}>{JSON.parse(localStorage.getItem("lfuser")).is_client ? "Hire" : "Collaborate"}</Button>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Card sx={{ width: '100%', height: '100%', borderRadius: '30px', padding: '5%' }}>
                        <BasicTabs />

                    </Card>
                </Box>
            </Drawer>}
        </>

    )
}

export default TopCreators