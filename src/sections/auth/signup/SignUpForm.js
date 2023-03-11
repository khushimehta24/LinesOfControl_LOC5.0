import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { ref, uploadBytesResumable, getDownloadURL, uploadBytes } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore";
// @mui
import { Link, Stack, IconButton, InputAdornment, TextField, Checkbox, Grid, CircularProgress } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import { Box } from '@mui/system';
// components
import Iconify from '../../../components/iconify';
import { auth, db, storage } from '../../../firebase/firebase';
// ----------------------------------------------------------------------

export default function SignUpForm() {
  const navigate = useNavigate();
  const [load, setLoad] = useState(false)
  const [showPassword, setShowPassword] = useState(false);
  const [imgUpload, setImgUpload] = useState('')
  const [json, setJson] = useState({
    email: '',
    password: '',
    name: '',
    confirm_password: '',
    phone_no: '',
    profile_img: null
  })

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setJson({ ...json, [name]: value });
  }
  console.log(json)

  const handleClick = async () => {
    try {
      const res = await createUserWithEmailAndPassword(auth, json.email, json.password)
      console.log(res.user.uid)
      const storageRef = ref(storage, json.email.split("@")[0]);

      const uploadTask = uploadBytesResumable(storageRef, imgUpload);
      console.log(uploadTask)
      const imageRef = ref(storage, json.email.split("@")[0]);
      uploadBytes(imageRef, imgUpload).then((snapshot) => {
        getDownloadURL(snapshot.ref).then(async (url) => {
          console.log(url);
          await updateProfile(res.user, {
            displayName: json.name,
            photoURL: url
          }).then((res) => console.log(res))
            .catch((e) => console.log(e))
          await setDoc(doc(db, "users", res.user.uid), {
            displayName: json.name,
            email: json.email,
            photoURL: url,
            uid: res.user.uid
          }).then((res) => console.log(res))
            .catch((e) => console.log(e))
        });
      });

    } catch (error) {
      console.log(error)
    }
  };
  console.log(imgUpload)
  return (
    <>
      <Stack spacing={3}>
        <Grid container spacing={2} >
          <Grid item md={12} sx={{ width: '100%' }}>
            <TextField name="name" label="Name" sx={{ width: '100%' }} value={json.name} id='name' onChange={handleChange} />
          </Grid>
          <Grid item md={6} sx={{ width: '100%' }}>
            <TextField name="phone_no" label="Phone Number" sx={{ width: '100%' }} value={json.phone_no} id='phone_no' onChange={handleChange} />
          </Grid>
          <Grid item md={6} sx={{ width: '100%' }}>
            <TextField name="email" placeholder="Email address" sx={{ width: '100%' }} value={json.email} id='email' onChange={handleChange} />
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
        </Grid>


      </Stack>

      <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ my: 2 }}>
        <Checkbox name="remember" label="Remember me" />
        <Link variant="subtitle2" sx={{ color: "#4060F3" }} underline="hover">
          Keep me signed in
        </Link>
      </Stack>

      {!load ? <LoadingButton onClick={handleClick} sx={{ backgroundColor: "#4060F3" }} fullWidth size="large" type="submit" variant="contained">
        Sign Up
      </LoadingButton> : <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <CircularProgress sx={{ backgroundColor: '#4060F3', color: '#EDEDED', padding: '5px', borderRadius: '50%' }} />
      </Box>}
    </>
  );
}
