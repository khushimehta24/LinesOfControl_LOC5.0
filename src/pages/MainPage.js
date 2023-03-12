import { Box, Grid, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import GetServices from '../services/GetServices'
import TopCreators from '../sections/@dashboard/main/TopCreators'

function MainPage() {

    useEffect(() => {
        const func = async () => {
            await GetServices.getUserEvent()
                .then((res) => {
                    console.log(res, 'ressssss')
                }).catch((err) => {
                    console.log(err)
                })

        }
        func()
    }, [])
    return (
        <Box sx={{ padding: '0 2%' }}>
            <Typography variant='h5' sx={{ fontFamily: 'Poppins' }}>Top Creators</Typography>
            <Grid container columnSpacing={3} sx={{ width: '100%', display: 'flex' }}>
                <TopCreators />
            </Grid>
        </Box>
    )
}

export default MainPage