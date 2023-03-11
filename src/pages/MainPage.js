import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import TopCreators from '../sections/@dashboard/main/TopCreators'

function MainPage() {
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