import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import SchoolIcon from '@mui/icons-material/School';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import CollectionsIcon from '@mui/icons-material/Collections';
//import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import { NavLink } from 'react-router-dom'
import './Navbar.css'
import { Button, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux'
import { SIGN_IN, setStateModal } from '../../store/slices/modalSlice';
import { signOut } from '../../store/slices/authSlice';
import GroupIcon from '@mui/icons-material/Group';
import HomeIcon from '@mui/icons-material/Home';

const navbarItems = [
    {
        title: 'Головна сторінка',
        link: '/',
        icon: HomeIcon
    },
    {
        title: 'Професiйна дiяльнiсть',
        link: 'professional',
        icon: SchoolIcon
    },
    {
        title: 'Творча дiяльнiсть',
        link: 'creation',
        icon: AutoStoriesIcon
    },
    {
        title: 'Фотогалерея',
        link: 'gallery',
        icon: CollectionsIcon
    },
    // {
    //     title: 'Відео',
    //     link: 'videos',
    //     icon: OndemandVideoIcon
    // },
    {
        title: 'Я - класний керівник',
        link: 'classactivity',
        icon: GroupIcon
    }
]

export default function Navbar({stateNavbar ,setStateNavabar}) {

    const dispatch = useDispatch()
    const auth = useSelector(state => state.auth.auth)

    const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
        return;
    }
    setStateNavabar(open)
    };

    const list = (anchor) => (
        <Box
        sx={{ backgroundColor: '#1976d2', height: '100%' }}
        role="presentation"
        onClick={toggleDrawer(anchor, false)}
        onKeyDown={toggleDrawer(anchor, false)}
        >
        <List>
            {navbarItems.map((item) => (
                <NavLink key={item.link} to={item.link}>
                    <ListItem disablePadding>
                            <ListItemButton>
                            <ListItemIcon>
                                {<item.icon sx={{color: 'rgb(245, 245, 245)'}}/>}
                            </ListItemIcon>
                            <Typography variant='h6' sx={{color: 'rgb(245, 245, 245)'}}>
                            {item.title}
                            </Typography>
                            </ListItemButton>
                    </ListItem>
                </NavLink>
            ))}
        </List>
        <Divider />
            <Box m={2}>
                {auth ?
                    <Button variant="outlined" 
                            sx={{backgroundColor: '#fff', '&:hover': {backgroundColor: '#fff'}}}
                            onClick={() => dispatch(signOut())}
                        >Вийти
                    </Button>
                    :
                    <Button variant="outlined" 
                            sx={{backgroundColor: '#fff', '&:hover': {backgroundColor: '#fff'}}}
                            onClick={() => dispatch(setStateModal({open: true, type: SIGN_IN}))}
                        >Увiйти
                    </Button>
                }
                
                
            </Box>
        </Box>
    );

    return (
        <div>
            <React.Fragment>
                <Drawer
                    anchor={'left'}
                    open={stateNavbar}
                    onClose={toggleDrawer(false)}
                >
                    {list('left')}
                </Drawer>
            </React.Fragment>
        </div>
    );
}