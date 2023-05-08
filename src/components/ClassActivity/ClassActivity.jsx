import { Box } from '@mui/system';
import React, { useEffect } from 'react'
import Preloader from '../Preloader/Preloader';
import style from '../Home/Home.module.css'
import ClassActivityList from './ClassActivityList';
import AddActivity from './AddActivity';
import { useDispatch, useSelector } from 'react-redux';
import { getClassActivity } from '../../store/slices/activitySlice';

const ClassActivity = () => {

    const dispatch = useDispatch()
    const classActivity = useSelector(state => state.activity.classActivity)
    const auth = useSelector(state => state.auth.auth)
    useEffect(() => {
        if(classActivity.length === 0) {
            dispatch(getClassActivity())
        }
    },[dispatch, classActivity])

    return (  
        <Box mb={2}>
            <Preloader />
            <Box p={1}>
                <h2 className={style.titleText}>Я - класний керівник</h2>
            </Box>
            {auth && <AddActivity dispatch={dispatch}/>}
            <ClassActivityList classActivity={classActivity} dispatch={dispatch} auth={auth}/>
        </Box>
    );
}

export default ClassActivity;