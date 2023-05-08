import React from 'react';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import { useSelector } from 'react-redux';

export default function Preloader() {
    // const [open, setOpen] = React.useState(false);
    // const handleClose = () => {
    //   setOpen(false);
    // };
    // const handleToggle = () => {
    //   setOpen(!open);
    // };
    const loading = useSelector(state => state.app.isFetching)

    return (
        <div>
            <Backdrop
            sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
            open={loading}
            //onClick={handleClose}
            >
            <CircularProgress color="inherit" />
            </Backdrop>
        </div>
        );
    }