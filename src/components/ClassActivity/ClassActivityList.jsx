import { Button, Grid, Typography } from '@mui/material';
import React from 'react'
import { NavLink } from 'react-router-dom';
import DeleteIcon from '@mui/icons-material/Delete';
import { deleteClassActivity } from '../../store/slices/activitySlice';

const ClassActivityList = ({classActivity, dispatch, auth}) => {

    return (  
        <Grid item container xs={12} md={10} gap={2} justifyContent={'center'} sx={{margin: '0 auto'}}>
            {classActivity.map(item => (
                <Grid item key={item.id} sx={{width: '300px', backgroundColor: '#1976d2', borderRadius: '8px', '&:hover': {backgroundColor: '#1d8fff'}, transition: '0.5s'}} p={2}>
                    <Grid container direction={'column'} justifyContent={'space-between'} height={'100%'}>
                        <Grid item><Typography variant="h6" gutterBottom sx={{color: '#fff'}}>{item.name}</Typography></Grid>
                        <Grid item>
                            <NavLink to={item.link} target='blank'>
                                <Button variant="contained" sx={{backgroundColor: '#fff', color: '#1976d2', '&:hover': {backgroundColor: 'azure', color: '#1976d2'}}}>Подивитися</Button>
                            </NavLink>
                            {auth && <DeleteIcon sx={{color: '#fff', float: 'right', cursor: 'pointer'}} onClick={() => dispatch(deleteClassActivity(item.id))}/>}
                        </Grid>    
                    </Grid>    
                </Grid>
            ))}         
        </Grid>
    );
}

export default ClassActivityList;