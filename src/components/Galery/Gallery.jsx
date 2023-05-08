import { Grid } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect } from 'react'
import Photos from './Photos';
import AddPhoto from './AddPhoto';
import { useDispatch, useSelector } from 'react-redux';
import { getPhotos } from '../../store/slices/photosSlice';
import Preloader from '../Preloader/Preloader';
import style from '../Home/Home.module.css'

const Gallery = () => {

    const dispatch = useDispatch()
    const auth = useSelector(state => state.auth.auth)
    const photos = useSelector(state => state.photos.photos)
    useEffect(() => {
        if(photos.length === 0) dispatch(getPhotos())
    },[dispatch, photos])

    return ( 
        <section>
            <Box p={1}>
                <h2 className={style.titleText}>Фотогалерея</h2>
                <Preloader />
                <Grid item container direction={'column'} justifyContent={'center'} xs={12} md={8} margin={'auto'}>
                    <Grid item xs={11} md={6} alignItems={'center'}>
                        {auth && <AddPhoto />}
                    </Grid>
                    <Grid item xs={11} md={6} alignItems={'center'} mt={1}>
                        <Photos photos={photos} auth={auth}/>
                    </Grid>
                </Grid>
            </Box>
        </section>
        
    );
}

export default Gallery;