import { CardContent, CardMedia, Grid } from '@mui/material'
import React from 'react'

function TopCreators() {
    return (
        <>
            <Grid item md={3}>
                <CardContent sx={{ bgcolor: 'white', padding: '10px', borderRadius: '5px' }}>
                    <Grid container columnSpacing={1}>
                        <Grid item md={6}>
                            <CardMedia sx={{ height: '130px', width: '100%', borderRadius: '2.5px' }} component='img' image='https://source.unsplash.com/random/1' />
                        </Grid>
                        <Grid item md={6}>
                            <CardMedia sx={{ height: '130px', width: '100%', borderRadius: '2.5px' }} component='img' image='https://source.unsplash.com/random/2' />
                        </Grid>
                        <Grid item md={12} sx={{ marginTop: '-50px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                            <CardMedia component='img' image='https://source.unsplash.com/random/9' sx={{ height: '70px', width: '70px', borderRadius: '50px', border: '4px solid white' }} />
                            <h4 style={{ fontFamily: 'Poppins', margin: '0', padding: '0' }}>Diana Glow</h4>
                            <p style={{ fontSize: '12px', color: '#D2D2D2', margin: '0', padding: '0' }}>New York, USA</p>
                        </Grid>
                    </Grid>
                </CardContent>
            </Grid>
            <Grid item md={3}>
                <CardContent sx={{ bgcolor: 'white', padding: '10px', borderRadius: '5px' }}>
                    <Grid container columnSpacing={1}>
                        <Grid item md={6}>
                            <CardMedia sx={{ height: '130px', width: '100%', borderRadius: '2.5px' }} component='img' image='https://source.unsplash.com/random/3' />
                        </Grid>
                        <Grid item md={6}>
                            <CardMedia sx={{ height: '130px', width: '100%', borderRadius: '2.5px' }} component='img' image='https://source.unsplash.com/random/4' />
                        </Grid>
                        <Grid item md={12} sx={{ marginTop: '-50px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                            <CardMedia component='img' image='https://source.unsplash.com/random/10' sx={{ height: '70px', width: '70px', borderRadius: '50px', border: '4px solid white' }} />
                            <h4 style={{ fontFamily: 'Poppins', margin: '0', padding: '0' }}>Diana Glow</h4>
                            <p style={{ fontSize: '12px', color: '#D2D2D2', margin: '0', padding: '0' }}>New York, USA</p>
                        </Grid>
                    </Grid>
                </CardContent>
            </Grid>
            <Grid item md={3}>
                <CardContent sx={{ bgcolor: 'white', padding: '10px', borderRadius: '5px' }}>
                    <Grid container columnSpacing={1}>
                        <Grid item md={6}>
                            <CardMedia sx={{ height: '130px', width: '100%', borderRadius: '2.5px' }} component='img' image='https://source.unsplash.com/random/5' />
                        </Grid>
                        <Grid item md={6}>
                            <CardMedia sx={{ height: '130px', width: '100%', borderRadius: '2.5px' }} component='img' image='https://source.unsplash.com/random/6' />
                        </Grid>
                        <Grid item md={12} sx={{ marginTop: '-50px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                            <CardMedia component='img' image='https://source.unsplash.com/random/11' sx={{ height: '70px', width: '70px', borderRadius: '50px', border: '4px solid white' }} />
                            <h4 style={{ fontFamily: 'Poppins', margin: '0', padding: '0' }}>Diana Glow</h4>
                            <p style={{ fontSize: '12px', color: '#D2D2D2', margin: '0', padding: '0' }}>New York, USA</p>
                        </Grid>
                    </Grid>
                </CardContent>
            </Grid>
            <Grid item md={3}>
                <CardContent sx={{ bgcolor: 'white', padding: '10px', borderRadius: '5px' }}>
                    <Grid container columnSpacing={1}>
                        <Grid item md={6}>
                            <CardMedia sx={{ height: '130px', width: '100%', borderRadius: '2.5px' }} component='img' image='https://source.unsplash.com/random/7' />
                        </Grid>
                        <Grid item md={6}>
                            <CardMedia sx={{ height: '130px', width: '100%', borderRadius: '2.5px' }} component='img' image='https://source.unsplash.com/random/8' />
                        </Grid>
                        <Grid item md={12} sx={{ marginTop: '-50px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                            <CardMedia component='img' image='https://source.unsplash.com/random/12' sx={{ height: '70px', width: '70px', borderRadius: '50px', border: '4px solid white' }} />
                            <h4 style={{ fontFamily: 'Poppins', margin: '0', padding: '0' }}>Diana Glow</h4>
                            <p style={{ fontSize: '12px', color: '#D2D2D2', margin: '0', padding: '0' }}>New York, USA</p>
                        </Grid>
                    </Grid>
                </CardContent>
            </Grid>
        </>

    )
}

export default TopCreators