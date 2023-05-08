import { Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import { deletePublication } from '../../store/slices/activitySlice';

const PublicationList = ({publications, dispatch, auth}) => {
    return (  
        <Grid item container xs={12} md={10} gap={2} justifyContent={'center'} sx={{margin: '0 auto'}}>
            {publications.map(pub => (
                <Grid key={pub.id} item xs={12} md={6} p={2} gap={2}>
                    <Box p={2} sx={{backgroundColor: '#fff', boxShadow: '8px 8px 8px 0px rgba(34, 60, 80, 0.2)', transition: '0.5s', borderRadius: '4px', '&:hover': {boxShadow: '8px 8px 8px 0px #53a4f3'}}}>
                            <Typography variant='h3' gutterBottom align='center' sx={{color: 'rgb(46, 46, 46)'}}>
                                {pub.name}
                            </Typography>
                            <Typography variant='h6' gutterBottom paragraph align='center' sx={{color: 'rgb(46, 46, 46)', whiteSpace: 'pre-line', fontFamily: 'sans-serif'}}>
                                    {pub.body}
                            </Typography>
                            {<Typography variant='body1' gutterBottom align='right' sx={{color: 'rgb(46, 46, 46)'}}>
                                    {pub.signature}
                            </Typography>}
                            {/* <div style={{whiteSpace: 'pre-line'}}>{body}</div> */}
                            {auth && <DeleteIcon sx={{ cursor: 'pointer', color: '#1976d2'}} onClick={() => dispatch(deletePublication(pub.id))}/>}
                    </Box>                    
                </Grid>
                ))}
        </Grid>
    );
}


export default PublicationList;