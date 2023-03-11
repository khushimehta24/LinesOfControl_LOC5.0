import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// @mui
import { Link, Stack, IconButton, InputAdornment, TextField, Checkbox, FormControlLabel } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import { CometChat } from '@cometchat-pro/chat';
// components
import Iconify from '../../../components/iconify';
import AuthServices from '../../../services/AuthServices';
import { COMETCHAT_CONSTANTS } from './../../cometchat-pro-react-ui-kit/CometChatWorkspace/src/resources/__mocks__/consts';

// ----------------------------------------------------------------------

export default function LoginForm() {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [json, setJson] = useState({
    email: '',
    password: ''
  })

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setJson({ ...json, [name]: value });
  }
  const handleClick = async () => {
    const authKey = COMETCHAT_CONSTANTS.AUTH_KEY;
    const uid = `${json.email.split('@')[0]}`;

    CometChat.login(uid, authKey).then(
      user => {
        console.log("Login Successful:", { user });
      },
      error => {
        console.log("Login failed with exception:", { error });
      }
    );
    await AuthServices.login(json).then((res) => {
      console.log(res.data.token, res.data.user)
      localStorage.setItem('token', res.data.token)
      localStorage.setItem('lfuser', JSON.stringify(res.data.user))
      navigate('/dashboard/app')
    })
  };

  return (
    <>
      <Stack spacing={3}>
        <TextField name="email" label="Email address" onChange={handleChange} />

        <TextField
          name="password"
          label="Password"
          type={showPassword ? 'text' : 'password'}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={() => setShowPassword(!showPassword)} edge="end">
                  <Iconify icon={showPassword ? 'eva:eye-fill' : 'eva:eye-off-fill'} />
                </IconButton>
              </InputAdornment>
            ),
          }}
          onChange={handleChange}
        />
      </Stack>

      <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ my: 2 }}>
        <FormControlLabel control={<Checkbox defaultChecked />} label="Remember me" />
        <Link variant="subtitle2" underline="hover">
          Forgot password?
        </Link>
      </Stack>

      <LoadingButton fullWidth size="large" type="submit" variant="contained" onClick={handleClick}>
        Login
      </LoadingButton>
    </>
  );
}
