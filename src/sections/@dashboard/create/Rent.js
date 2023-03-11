import { Box, Button, CardContent, CardMedia, Grid, TextField, Typography } from '@mui/material'
import moment from 'moment/moment'
import React, { useState } from 'react'

const textField = { width: '100%' }
function Rent() {
    const [json, setJson] = useState({
        name: '',
        rent: '',
        from_date: '',
        to_date: '',
        image: '',
        desc: '',
        creator: '',
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
                    <Grid container columnSpacing={1} sx={{ display: 'flex', alignItems: 'center', marginBottom: '3%' }}>
                        <Grid item>
                            <CardMedia component='img' image='https://source.unsplash.com/random/9' sx={{ width: '30px', height: '30px', borderRadius: '50px' }} />
                        </Grid>
                        <Grid item>
                            <h4 style={{ fontSize: '14px', color: 'black', margin: '0', padding: '0' }}>creator name</h4>
                            <p style={{ fontSize: '10px', color: '#c2c2c2', margin: '0', padding: '0' }}>10|02|2022 - 20|10|2022</p>
                        </Grid>
                    </Grid>
                    <Box sx={{ width: '295px', height: '250px', bgcolor: '#D2D2D2' }} />
                    <h3 style={{ fontFamily: 'Poppins', margin: '0', padding: '0' }}>Camera Canon</h3>
                    <p style={{ fontSize: '10px', color: '#c2c2c2', margin: '0', padding: '0' }}> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab voluptatum neque ullam ipsa odit repudiandae </p>

                    <Button sx={{ width: '100%', bgcolor: 'black', color: 'white', marginTop: '10%' }} >Rent</Button>

                </CardContent>
            </Grid>
            <Grid item md={9}>
                <Grid container spacing={3}>
                    <Grid item md={4} xs={12}>
                        <p style={{ fontSize: '12px' }}>Device Name</p>
                        <TextField required value={json.name} sx={textField} type="text" name='name' id='name' onChange={handleChange} />
                    </Grid>
                    <Grid item md={4} xs={12}>
                        <p style={{ fontSize: '12px' }}>Rent/day</p>
                        <TextField required value={json.rent} sx={textField} type="text" name='rent' id='rent' onChange={handleChange} />
                    </Grid>
                    <Grid item md={4} xs={12}>
                        <p style={{ fontSize: '12px' }}>Creator</p>
                        <TextField required value={json.creator} sx={textField} type="text" name='creator' id='creator' onChange={handleChange} />
                    </Grid>
                    <Grid item md={4} xs={12}>
                        <p style={{ fontSize: '12px' }}>From Date</p>
                        <TextField required value={json.from_date} sx={textField} type="from_date" name='from_date' InputProps={{ inputProps: { min: moment().format('YYYY-MM-DD') } }} id='date' onChange={handleChange} />
                    </Grid>
                    <Grid item md={4} xs={12}>
                        <p style={{ fontSize: '12px' }}>To Date</p>
                        <TextField required value={json.to_date} sx={textField} type="date" name='to_date' id='to_date' onChange={handleChange} />
                    </Grid>
                    <Grid item md={4} xs={12}>
                        <p style={{ fontSize: '12px' }}>Image</p>
                        <TextField required value={json.duration} sx={textField} type="text" name='duration' id='duration' onChange={handleChange} />
                    </Grid>
                    <Grid item md={12} xs={12}>
                        <p style={{ fontSize: '12px' }}>Description</p>
                        <TextField required value={json.desc} sx={textField} type="text" name='desc' id='desc' multiline rows={4} onChange={handleChange} />
                        <Button sx={{ width: '100%', bgcolor: 'black', color: 'white', marginTop: '3%' }} >Register</Button>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default Rent