import { Box, Button, CardContent, CardMedia, Grid, TextField, Typography, Select, MenuItem, FormControl, InputLabel } from '@mui/material'
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage'
import moment from 'moment/moment'
import React, { useState } from 'react'
import { storage } from '../../../firebase/firebase'
import Create from '../../../services/Create'

const textField = { width: '100%' }
function Event() {
    const [json, setJson] = useState({
        name: '',
        venue: '',
        date: '',
        creator: JSON.parse(localStorage.getItem('lfuser')) && JSON.parse(localStorage.getItem('lfuser')).id,
        desc: '',
        duration: '',
        time: '',
        img: '',
        category: ''
    })
    const categories = ["urban", "nature", "wildlife", "portrait"]
    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setJson({ ...json, [name]: value });
    }

    const createevents = async () => {
        await Create.createEvent(json).then((res) => {
            console.log(res)
        })
    }

    const uploadFile = (e) => {
        if (e.target.files[0] == null) return;
        const imageRef = ref(storage, `images/${e.target.files[0].name} + ${JSON.parse(localStorage.getItem('lfuser')).uid}`);
        uploadBytes(imageRef, e.target.files[0]).then((snapshot) => {
            getDownloadURL(snapshot.ref).then((url) => {
                setJson({ ...json, img: url });

                console.log(url);
            });
        });
    };

    console.log(json)
    return (
        <Grid container spacing={3} sx={{ padding: '0', '& .css-19kzrtu': { padding: '0px', paddingTop: '24px' } }}>
            <Grid item md={3}>
                <CardContent sx={{ bgcolor: 'white', padding: '10px', borderRadius: '10px' }}>
                    <Grid container columnSpacing={3} sx={{ display: 'flex', alignItems: 'center', marginBottom: '3%' }}>
                        <Grid item>
                            <CardMedia component='img' image={json.img === "" ? 'https://source.unsplash.com/random/9' : json.img} sx={{ width: '70px', height: '70px', borderRadius: '50px' }} />
                        </Grid>
                        <Grid item>
                            <h2 style={{ fontFamily: 'Poppins' }}>{JSON.parse(localStorage.getItem('lfuser')) && JSON.parse(localStorage.getItem('lfuser')).name}</h2>
                        </Grid>
                    </Grid>
                    <p style={{ fontSize: '12px', color: '#D2D2D2', margin: '0', padding: '0' }}>{json.date ? json.date : "Date"} - {json.venue ? json.venue : "Venue"}</p>
                    <h3 style={{ margin: '0', padding: '0' }}>{json.name ? json.name : "Event Name"}</h3>
                    <p style={{ fontSize: '12px', color: '#D2D2D2', padding: '0', marginBottom: '0' }}>Hosted By</p>
                    <CardMedia component='img' image='https://source.unsplash.com/random/9' sx={{ width: '30px', border: '2px solid black', height: '30px', borderRadius: '50px' }} />
                    <Button sx={{
                        width: '100%', bgcolor: 'black', color: 'white', marginTop: '10%', "&:hover": {
                            backgroundColor: 'black'
                        }
                    }} >Register</Button>

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
                        <p style={{ fontSize: '12px' }}>Category</p>
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">Category</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={json.category}
                                label="Category"
                                name="category"
                                onChange={handleChange}
                            >
                                {categories.map((category) => {
                                    return <MenuItem value={category}>{category.charAt(0).toUpperCase() + category.slice(1)}</MenuItem>
                                })
                                }
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item md={3} xs={12}>
                        <p style={{ fontSize: '12px' }}>Date</p>
                        <TextField required value={json.date} sx={textField} type="date" name='date' InputProps={{ inputProps: { min: moment().format('YYYY-MM-DD') } }} id='date' onChange={handleChange} />
                    </Grid>
                    <Grid item md={3} xs={12}>
                        <p style={{ fontSize: '12px' }}>Time</p>
                        <TextField required value={json.time} sx={textField} type="time" name='time' id='time' onChange={handleChange} />
                    </Grid>
                    <Grid item md={3} xs={12}>
                        <p style={{ fontSize: '12px' }}>Duration</p>
                        <TextField required value={json.duration} sx={textField} type="text" name='duration' id='duration' onChange={handleChange} />
                    </Grid>
                    <Grid item md={3} xs={12}>
                        <p style={{ fontSize: '12px' }}>Image</p>
                        <TextField required type="file" sx={textField} name='img' id='img' onChange={(e) => uploadFile(e)} />
                    </Grid>
                    <Grid item md={12} xs={12}>
                        <p style={{ fontSize: '12px' }}>Description</p>
                        <TextField required value={json.desc} sx={textField} type="text" name='desc' id='desc' multiline rows={4} onChange={handleChange} />
                        <Button sx={{
                            width: '100%', bgcolor: 'black', color: 'white', marginTop: '3%', "&:hover": {
                                backgroundColor: 'black'
                            }
                        }} onClick={() => { createevents() }}>Register</Button>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}


export default Event