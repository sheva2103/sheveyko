import { Grid } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react'
import { useDispatch } from 'react-redux';
import { SHOW_IMAGE, setStateModal } from '../../store/slices/modalSlice';
import DeleteIcon from '@mui/icons-material/Delete';
import { deletePhoto } from '../../store/slices/photosSlice';

const Photos = ({photos, auth}) => {

    const dispatch = useDispatch()
    

    return ( 
        <Box sx={{padding: '8px', borderRadius: '8px', boxShadow: '2px 2px 8px 4px rgba(32, 148, 238, 0.2)', backgroundColor: 'rgba(171, 211, 242, 0.2)'}}>
            <Grid spacing={1} container justifyContent={'center'}>
                {photos.map((image, index) => (
                    <Grid key={image.id} item xs={12} md={'auto'} position={'relative'}>
                        <img src={image.link} 
                                style={{width: '100%', height: '150px', objectFit: 'cover', cursor: 'pointer'}} 
                                alt={'link to facebook'} 
                                onClick={() => dispatch(setStateModal({open: true, type: SHOW_IMAGE, linkPhoto: image.link}))}
                        />
                        {auth && <DeleteIcon sx={{color: '#1976d2', cursor: 'pointer', position: "absolute", top: '8px', right: '2px'}} onClick={() => dispatch(deletePhoto(image.id))}/>}
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
}

export default Photos;