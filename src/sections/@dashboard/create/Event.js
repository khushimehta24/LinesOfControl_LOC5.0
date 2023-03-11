import { CardContent, CardMedia, Grid, TextField } from '@mui/material'
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
            <Grid item md={4}>
                <CardContent sx={{ bgcolor: 'white', padding: '10px', borderRadius: '10px' }}>
                    <CardMedia component='img' image='https://source.unsplash.com/random/9' sx={{ width: '70px', height: '70px', borderRadius: '50px' }} />
                </CardContent>
            </Grid>
            <Grid item md={8}>
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
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default Event