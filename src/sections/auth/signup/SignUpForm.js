import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { ref, uploadBytesResumable, getDownloadURL, uploadBytes } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore";
// @mui
import { Link, Stack, IconButton, InputAdornment, TextField, Checkbox, Grid, CircularProgress, FormControlLabel, MenuItem, FormControl, InputLabel, Select } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import { Box } from '@mui/system';
import { City } from 'country-state-city';
// components
import AuthServices from '../../../services/AuthServices';
import cometServices from '../../../services/cometServices'
import Iconify from '../../../components/iconify';
import { auth, db, storage } from '../../../firebase/firebase';
// ----------------------------------------------------------------------

export default function SignUpForm() {
  const navigate = useNavigate();
  const [load, setLoad] = useState(false)
  const [showPassword, setShowPassword] = useState(false);
  const [imgUpload, setImgUpload] = useState('')
  const [json, setJson] = useState({
    name: '',
    email: '',
    password: '',
    confirm_password: '',
    phone_no: '',
    city: '',
    image: 'https://images.unsplash.com/photo-1566438480900-0609be27a4be?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8aW1hZ2V8ZW58MHx8MHx8&w=1000&q=80',
    is_client: false
  })


  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setJson({ ...json, [name]: value });
  }
  console.log(json)

  const handleClick = async () => {
    await cometServices.signUp({ "uid": `${json.email.split('@')[0]}`, "name": `${json.name}`, "avatar": `${json.image}`, "Link": "", "role": "Default", "metadata": "None", "withAuthToken": true, "tags": [] })
      .then((res) => { console.log(res) })
    await AuthServices.signUp({ ...json, uid: `${json.email.split('@')[0]}` }).then((res) => {
      console.log(res.data.token, res.data.user)
      localStorage.setItem('token', res.data.token)
      localStorage.setItem('lfuser', JSON.stringify(res.data.user))
      navigate('/dashboard/app')
    })
  };
  // console.log(imgUpload)
  return (
    <>
      <Stack spacing={3}>
        <Grid container spacing={2} >
          <Grid item md={12} sx={{ width: '100%' }}>
            <TextField name="email" placeholder="Email address" sx={{ width: '100%' }} value={json.email} id='email' onChange={handleChange} />
          </Grid>
          <Grid item md={6} sx={{ width: '100%' }}>
            <TextField name="name" label="Name" sx={{ width: '100%' }} value={json.name} id='name' onChange={handleChange} />
          </Grid>
          <Grid item md={6} sx={{ width: '100%' }}>
            <FormControl fullWidth>
              <InputLabel id="city">City</InputLabel>
              <Select
                labelId="city"
                value={json.city}
                label="city"
                name='city'
                onChange={handleChange}
              >
                {
                  City.getCitiesOfCountry('IN').map((city) => {
                    return <MenuItem value={city.name}>{city.name}</MenuItem>
                  })
                }
              </Select>
            </FormControl>
          </Grid>
          <Grid item md={6} sx={{ width: '100%' }}>
            <TextField name="phone_no" label="Phone Number" sx={{ width: '100%' }} value={json.phone_no} id='phone_no' onChange={handleChange} />
          </Grid>
          <Grid item md={6}>
            <TextField name="profile_img" type='file' placeholder="Profile picture" sx={{ width: '100%' }} value={json.profile_img} id='profile_img' onChange={(e) => setImgUpload(e.target.files[0])} />

          </Grid>
          <Grid item md={6}>
            <TextField
              name="password"
              placeholder="Password" sx={{ width: '100%' }}
              type={showPassword ? 'text' : 'password'}
              value={json.password} id='password' onChange={handleChange}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={() => setShowPassword(!showPassword)} edge="end">
                      <Iconify icon={showPassword ? 'eva:eye-fill' : 'eva:eye-off-fill'} />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
          <Grid item md={6}>
            <TextField
              name="confirm_password"
              placeholder="Confirm Password" sx={{ width: '100%' }}
              type={showPassword ? 'text' : 'password'}
              value={json.confirm_password} id='confirm_password' onChange={handleChange}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={() => setShowPassword(!showPassword)} edge="end">
                      <Iconify icon={showPassword ? 'eva:eye-fill' : 'eva:eye-off-fill'} />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
        </Grid>
        <FormControlLabel control={<Checkbox defaultChecked />} label="Are you a client?" onChange={handleChange} />

      </Stack>

      {/* <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ my: 2 }}>
        <Checkbox name="remember" label="Remember me" />
        <Link variant="subtitle2" sx={{ color: "#4060F3" }} underline="hover">
          Keep me signed in
        </Link>
      </Stack> */}

      {!load ? <LoadingButton onClick={handleClick} sx={{ backgroundColor: "#4060F3" }} fullWidth size="large" type="submit" variant="contained">
        Sign Up
      </LoadingButton> : <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <CircularProgress sx={{ backgroundColor: '#4060F3', color: '#EDEDED', padding: '5px', borderRadius: '50%' }} />
      </Box>}
    </>
  );
}
