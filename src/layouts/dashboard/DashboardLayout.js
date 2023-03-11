import { useState } from 'react';
import { Outlet } from 'react-router-dom';
// @mui
import { styled } from '@mui/material/styles';
//
import Header from './header';
import Nav from './nav';

// ----------------------------------------------------------------------

const APP_BAR_MOBILE = 64;
const APP_BAR_DESKTOP = 92;

const StyledRoot = styled('div')({
  display: 'flex',
  minHeight: '100%',
  overflow: 'hidden'
});

const Main = styled('div')(({ theme }) => ({
  flexGrow: 1,
  overflow: 'auto',
  minHeight: '100%',
  paddingBottom: theme.spacing(10),
  paddingLeft: theme.spacing(1),
  paddingRight: theme.spacing(1),
  [theme.breakpoints.up('lg')]: {
    paddingTop: APP_BAR_DESKTOP,
    paddingLeft: theme.spacing(1),
    paddingRight: theme.spacing(1),
  },
}));

// ----------------------------------------------------------------------

export default function DashboardLayout() {
  const [open, setOpen] = useState(false);

  return (
    <StyledRoot sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Header onOpenNav={() => setOpen(true)} />

      <Nav openNav={open} onCloseNav={() => setOpen(false)} />

      <Main sx={{ backgroundColor: '#EDEDED', '& .css-1oqqzyl-MuiContainer-root': { maxWidth: '100%' }, "&::-webkit-scrollbar": { display: 'none' }, borderRadius: '20px', height: '96vh', overflowY: 'scroll' }}>
        <Outlet sx={{ width: '100%' }} />
      </Main>
    </StyledRoot>
  );
}
