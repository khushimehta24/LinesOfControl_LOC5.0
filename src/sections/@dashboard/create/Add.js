import { Box, Button, CardContent, CardMedia, Grid, TextField, Typography } from '@mui/material'
import moment from 'moment/moment'
import React, { useState } from 'react'

const textField = { width: '100%' }

function Add() {

    const [json, setJson] = useState({
        image: '',
        caption: '',
        location: ''
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
                    <Grid container columnSpacing={1} sx={{ display: 'flex', alignItems: 'center', marginBottom: '3%' }}>
                        <Grid item>
                            <CardMedia component='img' image='https://source.unsplash.com/random/9' sx={{ width: '30px', height: '30px', borderRadius: '50px' }} />
                        </Grid>
                        <Grid item>
                            <p style={{ fontSize: '12px', color: '#D2D2D2', margin: '0', padding: '0' }}>khushimehta</p>
                        </Grid>
                    </Grid>
                    <Box sx={{ width: '295px', height: '250px', bgcolor: '#D2D2D2' }} />
                    <p style={{ fontSize: '12px', color: '#D2D2D2', padding: '0', marginBottom: '0' }}>caption Lorem ipsum dolor sit  neque magni cupiditate velit asperiores, quisquam sapiente, impedit at repudiandae, similique quaerat sed dolorum eaque dolore harum.</p>
                </CardContent>
            </Grid>
            <Grid item md={9}>
                <Grid container spacing={3}>
                    <Grid item md={6} xs={12}>
                        <p style={{ fontSize: '12px' }}>Image</p>
                        <TextField required value={json.image} sx={textField} type="text" name='image' id='image' onChange={handleChange} />
                    </Grid>
                    <Grid item md={6} xs={12}>
                        <p style={{ fontSize: '12px' }}>Venue</p>
                        <TextField required value={json.caption} sx={textField} type="text" name='caption' id='caption' onChange={handleChange} />
                    </Grid>
                    <Grid item md={12} xs={12}>
                        <p style={{ fontSize: '12px' }}>Creator</p>
                        <TextField required value={json.location} sx={textField} type="text" name='location' id='location' onChange={handleChange} />
                        <Button sx={{ width: '100%', bgcolor: 'black', color: 'white', marginTop: '3%' }} >Post</Button>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default Add