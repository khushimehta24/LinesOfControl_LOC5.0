import { Box, Button, CardContent, CardMedia, Grid, TextField, Typography } from '@mui/material'
import moment from 'moment/moment'
import React, { useState } from 'react'
import { getDownloadURL } from 'firebase/storage';
import { uploadBytes } from 'firebase/storage';
import { ref } from 'firebase/storage';
import { storage } from 'src/firebase/firebase';
import { async } from '@firebase/util';
import Create from 'src/services/Create';

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

    const uploadFile = (e) => {
        if (e.target.files[0] == null) return;
        const imageRef = ref(storage, `images/${e.target.files[0].name} + ${JSON.parse(localStorage.getItem('lfuser')).uid}`);
        uploadBytes(imageRef, e.target.files[0]).then((snapshot) => {
            getDownloadURL(snapshot.ref).then((url) => {
                setJson({ ...json, image: url });

                console.log(url);
            });
        });
    };
    const uploadPost = async () => {
        await Create.createPost(json).then((res) => {
            console.log(res)
        })
    }

    return (
        <Grid container spacing={3} sx={{ padding: '0', '& .css-19kzrtu': { padding: '0px', paddingTop: '24px' } }}>
            <Grid item md={3}>
                <CardContent sx={{ bgcolor: 'white', padding: '10px', borderRadius: '10px' }}>
                    <Grid container columnSpacing={1} sx={{ display: 'flex', alignItems: 'center', marginBottom: '3%' }}>
                        <Grid item>
                            <CardMedia component='img' image={JSON.parse(localStorage.getItem('lfuser')).image} sx={{ width: '30px', height: '30px', borderRadius: '50px' }} />
                        </Grid>
                        <Grid item>
                            <p style={{ fontSize: '12px', color: '#D2D2D2', margin: '0', padding: '0' }}>{JSON.parse(localStorage.getItem('lfuser')).uid}</p>
                        </Grid>
                    </Grid>
                    {

                        json.img === '' ? <Box sx={{ width: '295px', height: '250px', bgcolor: '#D2D2D2' }} /> : <CardMedia component='img' image={json.image} sx={{ width: '295px', height: '295px' }} />

                    }
                    <p style={{ fontSize: '12px', color: '#D2D2D2', padding: '0', marginBottom: '0' }}>{json.caption?json.caption:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab voluptatum neque ullam ipsa odit repudiandae "}</p>
                </CardContent>
            </Grid>
            <Grid item md={9}>
                <Grid container spacing={3}>
                    <Grid item md={6} xs={12}>
                        <p style={{ fontSize: '12px' }}>Image</p>
                        <TextField required sx={textField} type="file" name='image' id='image' onChange={(e) => uploadFile(e)} />
                    </Grid>
                    <Grid item md={6} xs={12}>
                        <p style={{ fontSize: '12px' }}>Venue</p>
                        <TextField required value={json.location} sx={textField} type="text" name='location' id='location' onChange={handleChange} />
                    </Grid>
                    <Grid item md={12} xs={12}>
                        <p style={{ fontSize: '12px' }}>Caption</p>
                        <TextField required value={json.caption} sx={textField} multiline rows={4} type="text" name='caption' id='caption' onChange={handleChange} />
                    </Grid>
                    <Grid item md={12} xs={12}>
                        <Button sx={{
                            width: '100%', bgcolor: 'black', color: 'white', marginTop: '3%', "&:hover": {
                                backgroundColor: "black"
                            }
                        }} onClick={() => { uploadPost() }}>Post</Button>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default Add