import { Box, Button, CardContent, CardMedia, Grid, TextField, Typography } from '@mui/material'
import moment from 'moment/moment'
import React, { useState } from 'react'

const textField = { width: '100%' }
function Event() {
    const [json, setJson] = useState({
        name: '',
        venue: '',
        date: '',
        category: '',
        creator: '',
        desc: '',
        duration: '',
        time: ''
    })

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setJson({ ...json, [name]: value });
    }

    return (
        <Grid container spacing={3} sx={{ padding: '0', '& .css-19kzrtu': { padding: '0px', paddingTop: '24px' } }}>
            <Grid item md={3}>
                <CardContent sx={{ bgcolor: 'white', padding: '10px', borderRadius: '10px' }}>
                    <Grid container columnSpacing={3} sx={{ display: 'flex', alignItems: 'center', marginBottom: '3%' }}>
                        <Grid item>
                            <CardMedia component='img' image='https://source.unsplash.com/random/9' sx={{ width: '70px', height: '70px', borderRadius: '50px' }} />
                        </Grid>
                        <Grid item>
                            <h2 style={{ fontFamily: 'Poppins' }}>Apple</h2>
                        </Grid>
                    </Grid>
                    <p style={{ fontSize: '12px', color: '#D2D2D2', margin: '0', padding: '0' }}>10|02|2022 - Mumbai</p>
                    <h3 style={{ margin: '0', padding: '0' }}>Apple WorldWid Developer -  Conference 2022</h3>
                    <p style={{ fontSize: '12px', color: '#D2D2D2', padding: '0', marginBottom: '0' }}>Hosted By</p>
                    <CardMedia component='img' image='https://source.unsplash.com/random/9' sx={{ width: '30px', border: '2px solid black', height: '30px', borderRadius: '50px' }} />
                    <Button sx={{ width: '100%', bgcolor: 'black', color: 'white', marginTop: '10%' }} >Register</Button>

                </CardContent>
            </Grid>
            <Grid item md={9}>
                <Grid container spacing={3}>
                    <Grid item md={4} xs={12}>
                        <p style={{ fontSize: '12px' }}>Name of the Event</p>
                        <TextField required value={json.name} sx={textField} type="text" name='name' id='name' onChange={handleChange} />
                    </Grid>
                    <Grid item md={4} xs={12}>
                        <p style={{ fontSize: '12px' }}>Venue</p>
                        <TextField required value={json.venue} sx={textField} type="text" name='venue' id='venue' onChange={handleChange} />
                    </Grid>
                    <Grid item md={4} xs={12}>
                        <p style={{ fontSize: '12px' }}>Creator</p>
                        <TextField required value={json.creator} sx={textField} type="text" name='creator' id='creator' onChange={handleChange} />
                    </Grid>
                    <Grid item md={4} xs={12}>
                        <p style={{ fontSize: '12px' }}>Date</p>
                        <TextField required value={json.date} sx={textField} type="date" name='date' InputProps={{ inputProps: { min: moment().format('YYYY-MM-DD') } }} id='date' onChange={handleChange} />
                    </Grid>
                    <Grid item md={4} xs={12}>
                        <p style={{ fontSize: '12px' }}>Venue</p>
                        <TextField required value={json.time} sx={textField} type="time" name='time' id='time' onChange={handleChange} />
                    </Grid>
                    <Grid item md={4} xs={12}>
                        <p style={{ fontSize: '12px' }}>Duration</p>
                        <TextField required value={json.duration} sx={textField} type="text" name='duration' id='duration' onChange={handleChange} />
                    </Grid>
                    <Grid item md={12} xs={12}>
                        <p style={{ fontSize: '12px' }}>Description</p>
                        <TextField required value={json.desc} sx={textField} type="text" name='desc' id='desc' multiline rows={4} onChange={handleChange} />
                        <Button sx={{ width: '100%', bgcolor: 'black', color: 'white', marginTop: '5%' }} >Register</Button>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default Event