import { Box, Button, CardContent, CardMedia, Grid, TextField, Typography } from '@mui/material'
import moment from 'moment/moment'
import React, { useState } from 'react'
import { ref } from 'firebase/storage';
import { getDownloadURL } from 'firebase/storage';
import { uploadBytes } from 'firebase/storage';
import { storage } from 'src/firebase/firebase';
import Create from 'src/services/Create';

const textField = { width: '100%' }
function Rent() {
    const [json, setJson] = useState({
        name: '',
        rentpday: 0,
        from_date: '',
        to_date: '',
        image: '',
        desc: '',
        creator: JSON.parse(localStorage.getItem('lfuser')) && JSON.parse(localStorage.getItem('lfuser')).id,
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
    console.log(json)

    const uploadRental=async ()=>{
await Create.createRental(json).then((res)=>{
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
                            <h4 style={{ fontSize: '14px', color: 'black', margin: '0', padding: '0' }}>{JSON.parse(localStorage.getItem('lfuser')).name}</h4>
                            <p style={{ fontSize: '10px', color: '#c2c2c2', margin: '0', padding: '0' }}>{json.from_date ? json.from_date : "From"}   -   {json.to_date ? json.to_date : "To"}</p>
                        </Grid>
                    </Grid>
                    {

                        json.img === '' ? <Box sx={{ width: '295px', height: '250px', bgcolor: '#D2D2D2' }} /> : <CardMedia component='img' image={json.image} sx={{ width: '295px', height: '295px' }} />

                    }
                    <h3 style={{ fontFamily: 'Poppins', margin: '0', padding: '0' }}>{json.name ? json.name : "Device Name"}</h3>
                    <p style={{ fontSize: '10px', color: '#c2c2c2', margin: '0', padding: '0' }}> {json.desc ? json.desc : "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab voluptatum neque ullam ipsa odit repudiandae "}</p>

                    <Button sx={{ width: '100%', bgcolor: 'black', color: 'white', marginTop: '10%', "&:hover": { backgroundColor: 'black' } }} >Rent</Button>

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
                        <TextField required value={json.rent} sx={textField} type="text" name='rentpday' id='rent' onChange={handleChange} />
                    </Grid>
                    <Grid item md={4} xs={12}>
                        <p style={{ fontSize: '12px' }}>Creator</p>
                        <TextField required disabled sx={textField} type="text" name='creator' placeholder={JSON.parse(localStorage.getItem('lfuser')).uid} id='creator' onChange={handleChange} />
                    </Grid>
                    <Grid item md={4} xs={12}>
                        <p style={{ fontSize: '12px' }}>From Date</p>
                        <TextField required value={json.from_date} sx={textField} type="date" name='from_date' InputProps={{ inputProps: { min: moment().format('YYYY-MM-DD') } }} id='date' onChange={handleChange} />
                    </Grid>
                    <Grid item md={4} xs={12}>
                        <p style={{ fontSize: '12px' }}>To Date</p>
                        <TextField required value={json.to_date} sx={textField} type="date" name='to_date' id='to_date' onChange={handleChange} />
                    </Grid>
                    <Grid item md={4} xs={12}>
                        <p style={{ fontSize: '12px' }}>Image</p>
                        <TextField required sx={textField} type="file" name='image' id='image' onChange={(e) => uploadFile(e)} />
                    </Grid>
                    <Grid item md={12} xs={12}>
                        <p style={{ fontSize: '12px' }}>Description</p>
                        <TextField required value={json.desc} sx={textField} type="text" name='desc' id='desc' multiline rows={4} onChange={handleChange} />
                        <Button sx={{ width: '100%', bgcolor: 'black', color: 'white', marginTop: '3%', "&:hover": { backgroundColor: 'black' } }} onClick={()=>uploadRental()} >Register</Button>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default Rent