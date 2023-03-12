import { CardContent, CardMedia, Chip, Grid } from '@mui/material'
import React, { useEffect, useState } from 'react'
import GetServices from 'src/services/GetServices'

function Feed() {
    const [feed, setFeed] = useState([])
    useEffect(() => {
        const func = async () => {
            await GetServices.feed()
                .then((res) => {
                    setFeed(res.data)
                    console.log(res)
                })
        }
        func()
    }, [])

    return (
        <>
            <CardContent sx={{ bgcolor: 'white', borderRadius: '20px', maxHeight: '460px !important', padding: '12px', height: 'auto', boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px' }}>
                <Grid container columnSpacing={3}>
                    <Grid item >
                        <CardMedia component='img' image='https://source.unsplash.com/random/9' sx={{ width: '70px', height: '70px', borderRadius: '60px', border: '2px solid #D659D2' }} />
                    </Grid>
                    <Grid item>
                        <h4 style={{ fontFamily: 'Poppins', margin: '0', padding: '0' }}>Diana Glow</h4>
                        <p style={{ fontSize: '12px', color: '#b2b2b2', margin: '0', padding: '0' }}>Mumbai</p>
                        <Chip label="Urban Photographer" size='small' sx={{ backgroundColor: '#EF60E5', color: 'white' }} />
                    </Grid>
                    <br />
                    <Grid item md={12} container spacing={3} sx={{ marginTop: '5px' }}>
                        <Grid item md={4} >
                            <CardMedia component='img' image='https://source.unsplash.com/random/2' sx={{ height: '340px', borderRadius: '10px', overflow: 'hidden' }} />

                        </Grid>
                        <Grid item md={4} >
                            <CardMedia component='img' image='https://source.unsplash.com/random/22' sx={{ height: '340px', borderRadius: '10px', overflow: 'hidden' }} />

                        </Grid>

                    </Grid>
                </Grid>
            </CardContent>

        </>
    )
}

export default Feed