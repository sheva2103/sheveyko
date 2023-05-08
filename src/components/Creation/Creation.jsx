import { Box } from '@mui/system';
import React, { useEffect } from 'react'
//import style from '../Home/Home.module.css'
import style from './Creation.module.css'
import AddPublication from './AddPublication';
import { useDispatch, useSelector } from 'react-redux';
import { getPublication } from '../../store/slices/activitySlice';
import Preloader from '../Preloader/Preloader';
import PublicationList from './PublicationList';

const Creation = () => {

    const dispatch = useDispatch()
    const publications = useSelector(state => state.activity.creation)
    const auth = useSelector(state => state.auth.auth)
    useEffect(() => {
        if(publications.length === 0) dispatch(getPublication())
    },[dispatch, publications])

    return (  
        <Box>
            <Preloader />
            <Box p={1}>
                <h2 className={style.titleText}>"Я живу на папері"</h2>
            </Box>
            {auth && <AddPublication />}
            <PublicationList publications={publications} dispatch={dispatch} auth={auth}/>
        </Box>
    );
}

export default Creation;