import { Button, Grid, TextField } from '@mui/material';
import React, { useState } from 'react'
import Preloader from '../Preloader/Preloader';
import { v4 } from 'uuid';
import { sendClassActivity } from '../../store/slices/activitySlice';

const AddActivity = ({dispatch}) => {

    const [name, setName] = useState('')
    const [link, setLink] = useState('')
    const submit = (e) => {
        let data = {name, link, id: v4()}
        e.preventDefault()
        dispatch(sendClassActivity(data))
        console.log(data)
        setLink('')
        setName('')
    }

    return (  
        <Grid container item xs={10} md={8} sx={{margin: '0 auto 10px auto'}} p={1} justifyContent={'center'}>
            <form name='classActivity' onSubmit={submit}>
                <Grid container alignItems={'center'} sx={{border: 'solid 2px #1976d2', borderRadius: '16px'}} p={2}>
                    {/* <Grid item><input type="file" onChange={(e) => setPresent(e.target.files[0])} required/></Grid> */}
                    <Grid item xs={12} pr={2}>
                        <TextField sx={{m: 1}} 
                                id="outlined-basic" 
                                label="Назва" 
                                variant="outlined" 
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                                fullWidth
                                />
                    </Grid>
                    <Grid item xs={12} pr={2}>
                        <TextField sx={{m: 1}} 
                            id="outlined-basic" 
                            label="Посилання" 
                            variant="outlined" 
                            value={link}
                            onChange={(e) => setLink(e.target.value)}
                            required
                            fullWidth
                            />
                    </Grid>
                    <Grid item pl={1}>
                        <Button variant="contained" type='submit'>Додати</Button>
                    </Grid>
                </Grid>
            </form>
            <Preloader />
        </Grid>
    );
}

export default AddActivity;