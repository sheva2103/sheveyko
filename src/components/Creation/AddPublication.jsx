import { Button, Grid, TextField } from '@mui/material';
import React, { useState } from 'react'
import { v4 } from 'uuid';
import { useDispatch } from 'react-redux';
import Preloader from './../Preloader/Preloader';
import style from './Creation.module.css'
import { sendPublication } from '../../store/slices/activitySlice';

const AddPublication = () => {

    const dispatch = useDispatch()
    const [name, setName] = useState('')
    const [body, setBody] = useState('')
    const [signature, setSignature] = useState('')
    const submit = (e) => {
        e.preventDefault()
        let data = {name, body, signature, id: v4()}
        console.log({name, body, signature, id: v4()})
        dispatch(sendPublication(data))
        setName('')
        setBody('')
        setSignature('')
        
    }

    return (
        <Grid container item xs={10} md={8} sx={{margin: '0 auto'}} p={1} justifyContent={'center'}>
            <form name='addPresentation' onSubmit={submit}>
                <Grid container alignItems={'center'} sx={{border: 'solid 2px #1976d2', borderRadius: '16px'}} p={2}>
                    <Grid item xs={12}>
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
                    <Grid item xs={12}>
                        <textarea name="body" id="" cols="30" rows="10" className={style.textarea} required onChange={(e) => setBody(e.target.value)} value={body}></textarea>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField sx={{m: 1}} 
                                id="outlined-basic" 
                                label="Підпис" 
                                variant="outlined" 
                                value={signature}
                                onChange={(e) => setSignature(e.target.value)}
                                required
                                fullWidth
                                />
                    </Grid>
                    <Grid item>
                        <Button variant="contained" type='submit'>Додати публікацію</Button>
                    </Grid>
                </Grid>
            </form>
            <Preloader />
        </Grid>
    );
}

export default AddPublication;