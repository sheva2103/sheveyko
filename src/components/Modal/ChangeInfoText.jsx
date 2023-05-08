import { Button, TextField } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { changeInfo } from '../../store/slices/homeSlice';

const ChangeInfoText = () => {
    const text = useSelector(state => state.home)
    const dispatch = useDispatch()
    const [p1, setP1] = useState(text.p1)
    const [p2, setP2] = useState(text.p2)
    const onSubmit = () => {
        dispatch(changeInfo({p1, p2, id: 'userInfo'}))
    }
    return ( 
        <Box p={2}>
            <TextField sx={{mb: 2}} fullWidth label="Редагувати" variant="outlined" value={p1} onChange={(e) => setP1(e.target.value)}/>
            <TextField sx={{mb: 2}} fullWidth label="Редагувати" variant="outlined" value={p2} onChange={(e) => setP2(e.target.value)}/>
            <Button variant='contained' onClick={onSubmit}>Зберегти</Button>
        </Box>
    );
}

export default ChangeInfoText