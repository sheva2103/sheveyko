import { Grid, Typography } from '@mui/material';
import React from 'react'
import { NavLink } from 'react-router-dom';
import DeleteIcon from '@mui/icons-material/Delete';
import { deletePresentation } from '../../store/slices/activitySlice';

const PresentationsList = ({presentations, auth, dispatch}) => {
    return (  
        <Grid item container xs={12} md={10} gap={2} justifyContent={'center'} sx={{margin: '0 auto'}}>
                    {presentations?.map(pres => (
                        <Grid key={pres.id} item container justifyContent={'space-around'} 
                                sx={{width: '300px', backgroundColor: '#1976d2', borderRadius: '8px', '&:hover': {backgroundColor: '#1d8fff'}, transition: '0.5s'}} p={2}>
                            <NavLink to={pres.link} target='blank'>
                                <img src={pres.linkPreview} alt={pres.name} style={{width: '100%',borderRadius: '4px'}}/>
                            </NavLink>
                            <Typography variant='subtitle1' sx={{color: 'white', textAlign: 'center'}}><NavLink to={pres.link} target='blank'>{pres.name}</NavLink></Typography>
                            {auth && <DeleteIcon sx={{ cursor: 'pointer', color: '#fff'}} onClick={() => dispatch(deletePresentation(pres.id))}/>}
                        </Grid>
                    ))}
                    {/* <Grid item sx={{width: '300px', height: '300px', backgroundColor: '#1976d2'}}></Grid>
                    <Grid item sx={{width: '300px', height: '300px', backgroundColor: '#1976d2'}}></Grid>
                    <Grid item sx={{width: '300px', height: '300px', backgroundColor: '#1976d2'}}></Grid>
                    <Grid item sx={{width: '300px', height: '300px', backgroundColor: '#1976d2'}}></Grid>
                    <Grid item sx={{width: '300px', height: '300px', backgroundColor: '#1976d2'}}></Grid>
                    <Grid item sx={{width: '300px', height: '300px', backgroundColor: '#1976d2'}}></Grid> */}
                </Grid>
    );
}

export default PresentationsList;