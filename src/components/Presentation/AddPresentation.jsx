import { Button, Grid, TextField } from '@mui/material';
import React, { useState } from 'react'
import { v4 } from 'uuid';
import { sendPresentation } from '../../store/slices/activitySlice';
import { useDispatch } from 'react-redux';
import Preloader from './../Preloader/Preloader';

const AddPresentation = () => {

    const dispatch = useDispatch()
    //const [image, setPresent] = useState()
    const [linkPreview, setPreview] = useState('')
    const [link, setLink] = useState('')
    const [name, setName] = useState('')
    const getLink = (link) => {
        let start = link.indexOf('/d/')
        let end = link.indexOf('/view')
        return `https://docs.google.com/uc?id=${link.substring(start + 3, end)}`
    }
    const submit = (e) => {
        e.preventDefault()
        let data = {id: v4(), linkPreview: getLink(linkPreview), link, name}
        //console.log(data)
        dispatch(sendPresentation(data))
        setPreview('')
        setLink('')
        setName('')
    }

    return (
        <Grid container item xs={10} md={8} sx={{margin: '0 auto'}} p={1} justifyContent={'center'}>
            <form name='addPresentation' onSubmit={submit}>
                <Grid container alignItems={'center'} sx={{border: 'solid 2px #1976d2', borderRadius: '16px'}} p={2}>
                    {/* <Grid item><input type="file" onChange={(e) => setPresent(e.target.files[0])} required/></Grid> */}
                    <Grid item xs={12}>
                        <TextField sx={{m: 1}} 
                                id="outlined-basic" 
                                label="Посилання на прев'ю презентації" 
                                variant="outlined" 
                                value={linkPreview}
                                onChange={(e) => setPreview(e.target.value)}
                                required
                                fullWidth
                                />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField sx={{m: 1}} 
                            id="outlined-basic" 
                            label="Посилання на презентацію" 
                            variant="outlined" 
                            value={link}
                            onChange={(e) => setLink(e.target.value)}
                            required
                            fullWidth
                            />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField sx={{m: 1}} 
                                id="outlined-basic" 
                                label="Назва презентації" 
                                variant="outlined" 
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                                fullWidth
                                />
                    </Grid>
                    <Grid item>
                        <Button variant="contained" type='submit'>Додати презентацію</Button>
                    </Grid>
                </Grid>
            </form>
            <Preloader />
        </Grid>
    );
}

export default AddPresentation;