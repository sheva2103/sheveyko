import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Grid } from '@mui/material';
import Navbar from '../Navbar/Navbar';
import { NavLink } from 'react-router-dom';

export default function Header() {

    const [stateNavbar, setStateNavabar] = useState(false)

  return (
    <header>
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="fixed">
                <Toolbar>
                <Grid container direction={'column'} m={1}>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    <NavLink to={'/'}>sheveyko</NavLink>
                </Typography>
                {/* <Typography variant="subtitle1" component="div" sx={{ flexGrow: 1 }}>
                    Шевейко Ольги Василiвни
                </Typography> */}
                </Grid>
                <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{ mr: 1, ml: 1 }}
                    onClick={() => setStateNavabar(true)}
                >
                    <MenuIcon />
                </IconButton>
                </Toolbar>
            </AppBar>
        </Box>
        <Navbar stateNavbar={stateNavbar} setStateNavabar={setStateNavabar}/>
    </header>
  );
}