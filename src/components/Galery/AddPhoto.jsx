import React, { useState } from 'react'
import { Button, Grid, TextField } from '@mui/material';
import { Box } from '@mui/system';
import { useDispatch } from 'react-redux';
import { sendPhoto } from '../../store/slices/photosSlice';

const AddPhoto = () => {

    const dispatch = useDispatch()
    const [imageLink, setImageLink ] = useState('')

    return(
        <Box>
            <Grid container spacing={2} alignItems='center' justifyContent={'center'}>                                
                <Grid item xs={12} lg={10} alignItems={'center'}>                                    
                    <TextField fullWidth
                                id="filled-basic" label="Додати фото" variant="outlined"
                                value={imageLink}
                                onChange={(e) => setImageLink(e.target.value)}/>
                </Grid>
                <Grid item xs={12} md={2} justifyContent={'center'} alignItems={'center'}>
                    <Button variant="contained" 
                            sx={{padding: '8px', width: '100%'}} 
                            onClick={() => {
                                if (imageLink.trim().length === 0) {
                                    console.log('Посилання вiдсутнє')
                                } else {
                                    dispatch(sendPhoto(imageLink))
                                    setImageLink('')
                                }
                            }}
                                    >Додати</Button>
                </Grid>
            </Grid>
        </Box>
    )
} 


export default AddPhoto