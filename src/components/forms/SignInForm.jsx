import { Button, TextField } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { signIn } from '../../store/slices/authSlice';
import Preloader from './../Preloader/Preloader';

const SignIn = () => {

    const dispatch = useDispatch()
    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState({login: false, password: false})
    const onSubmit = (e) => {
        e.preventDefault()
        dispatch(signIn({login, password, setError, error}))
    }



    return ( 
        <Box
            p={2}
            pr={4}
            component="form"
            sx={{
                '& > :not(style)': { m: 1 },
            }}
            noValidate
            autoComplete="off"
            >
            <Preloader />
            <TextField id="outlined-basic" error={error.login} label="Логiн" variant="outlined" fullWidth onChange={(e) => setLogin(e.target.value)} value={login}/>
            <TextField id="outlined-basic1" error={error.password} label="Пароль" variant="outlined" fullWidth type='password' onChange={(e) => setPassword(e.target.value)} value={password}/>
            <Button variant="contained" type='submit' onClick={onSubmit}>Увiйти</Button>
        </Box>
    );
}

export default SignIn;