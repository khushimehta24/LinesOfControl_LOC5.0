import PropTypes from 'prop-types';
// @mui
import { Box, Card, Link, Typography, Stack, CardMedia, Button, Grid, CardContent } from '@mui/material';
import { styled } from '@mui/material/styles';
// utils
import { fCurrency } from '../../../utils/formatNumber';
// components
import Label from '../../../components/label';
import { ColorPreview } from '../../../components/color-utils';

// ----------------------------------------------------------------------

const StyledProductImg = styled('img')({
  top: 0,
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  position: 'absolute',
});

// ----------------------------------------------------------------------

ShopProductCard.propTypes = {
  product: PropTypes.object,
};

export default function ShopProductCard({ product }) {
  const { name, cover, price, colors, status, priceSale } = product;

  return <CardContent sx={{ bgcolor: 'white', padding: '10px', borderRadius: '10px' }}>
    <Grid container columnSpacing={3} sx={{ display: 'flex', alignItems: 'center', marginBottom: '3%' }}>
      <Grid item>
        <CardMedia component='img' image='https://source.unsplash.com/random/9' sx={{ width: '70px', height: '70px', borderRadius: '50px' }} />
      </Grid>
      <Grid item>
        <h2 style={{ fontFamily: 'Poppins' }}>{product.name}</h2>
      </Grid>
    </Grid>
    <p style={{ fontSize: '12px', color: '#D2D2D2', margin: '0', padding: '0' }}> {product.date}   -   {product.venue}</p>
    <h3 style={{ margin: '0', padding: '0' }}>Event Name</h3>
    <p style={{ fontSize: '12px', color: '#D2D2D2', padding: '0', marginBottom: '0' }}>Hosted By</p>
    <CardMedia component='img' image='https://source.unsplash.com/random/9' sx={{ width: '30px', border: '2px solid black', height: '30px', borderRadius: '50px' }} />
    <Button sx={{
      width: '100%', bgcolor: 'black', color: 'white', marginTop: '10%', "&:hover": {
        backgroundColor: 'black'
      }
    }} >Register</Button>

  </CardContent>

}
