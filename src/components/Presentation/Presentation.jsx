import { Box } from '@mui/system';
import React, { useEffect } from 'react'
import style from '../Home/Home.module.css'
import AddPresentation from './AddPresentation';
import { useDispatch, useSelector } from 'react-redux';
import { getPresentations } from '../../store/slices/activitySlice';
import PresentationsList from './PresentationsList';
import Preloader from '../Preloader/Preloader';

const Presentation = () => {

    const presentations = useSelector(state => state.activity.presentation)
    const auth = useSelector(state => state.auth.auth)
    const dispatch = useDispatch()
    useEffect(() => {
        if(presentations.length === 0) dispatch(getPresentations())
    },[dispatch, presentations])

    return (  
        <section>
            <Box p={1}>
                <h2 className={style.titleText}>Презентації</h2>
            </Box>
            {auth && <AddPresentation />}
            <Box p={2}>
                <PresentationsList presentations={presentations} auth={auth} dispatch={dispatch}/>
                <Preloader />
            </Box>
        </section>
    );
}

export default Presentation;