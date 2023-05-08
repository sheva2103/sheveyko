import { Box } from '@mui/system';
import React, { useEffect } from 'react'
import homeImage from '../images/home.jpg'
import myPhoto from '../images/myPhoto.jpg'
import { Button, Grid, Typography } from '@mui/material';
import style from './Home.module.css'
import { motion } from 'framer-motion'
import FacebookIcon from '@mui/icons-material/Facebook';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { CHANGE_INFO, setStateModal } from '../../store/slices/modalSlice';
import { getHomeInfo } from '../../store/slices/homeSlice';
import SchoolIcon from '@mui/icons-material/School';


const boxAnimationLeft = {
    hidden: {
        x: -400,
        opacity: 0
    },
    visible: custom => ({
        x: 0,
        opacity: 1,
        transition: {
            duration: 1
        }
    })
}

const boxAnimationRight = {
    hidden: {
        x: +400,
        opacity: 0
    },
    visible: custom => ({
        x: 0,
        opacity: 1,
        transition: {
            duration: 1
        }
    })
}

const Home = () => {

    const dispatch = useDispatch()
    const infoText = useSelector(state => state.home)
    const auth = useSelector(state => state.auth.auth)

    useEffect(() => {
        dispatch(getHomeInfo())
    },[dispatch])

    return ( 
        <Box>
            <Box position={'relative'}>
                <Box sx={{background: {xs: `url(${homeImage}) 0 0/cover no-repeat scroll`, md: `url(${homeImage}) center/cover no-repeat fixed`}, backgroundPosition: 'center'}}>
                    <Box sx={{backgroundColor: 'rgb(68 68 68 / 20%)', backdropFilter: 'blur(2px)'}} p={4}>
                    <Grid container item direction={'column'} alignItems={'center'} justifyContent={'center'} sx={{margin: '10px auto'}} xs={10} md={4}>
                        <Grid item>
                            <motion.div initial={{opacity: 0.1, y: -500}}
                                        animate={{opacity: 1, y: 0}}
                                        transition={{duration: 1.5}}>
                                <h2 className={style.welcomText}>
                                    … Я – українка! Ви чуєте, люди, я українка, маленька краплинка моря людського, що зветься красивим і сильним ім’ям Україна! Я – гордий нащадок древнього чесного роду, і в жилах моїх тече не блакитна прозора водиця, червона густа рідина. То нитка багряна, що в’ється від прадіда-діда...
                                </h2>
                                <Typography variant="h6" gutterBottom align='right' sx={{color: '#fff'}}>
                                    Шевейко О.В.
                                </Typography>
                            </motion.div>
                        </Grid>
                    </Grid>
                    </Box>
                </Box>
                <Box p={2}>
                    <Grid container justifyContent={'center'} alignItems={'center'} >
                        <Grid item xs={11} md={8}>
                            <h2 className={style.titleText}>Сайт учителя української мови, літератури та зарубiжної лiтератури<hr style={{backgroundColor: 'black', borderStyle: 'none', height: '1px'}}/>
                                                            Шевейко Ольги Василiвни
                            </h2>
                        </Grid>
                        <Grid item container justifyContent={'center'} alignItems={'center'} xs={12} md={8} sx={{overflowY: 'hidden'}}>
                            <Grid item xs={12} md={6}>
                                <motion.div
                                    initial='hidden'
                                    whileInView='visible'
                                    viewport={{ amount: 0.2, once: true }}
                                    >
                                    <Box p={3}>

                                        <motion.img 
                                        variants={boxAnimationLeft}
                                        src={myPhoto} alt="sheveyko" style={{width: '100%'}}/>
                                    </Box>
                                </motion.div>
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <motion.div
                                    initial='hidden'
                                    whileInView='visible'
                                    viewport={{ amount: 0.2, once: true }}
                                >
                                    <Box p={1}>
                                        <motion.div variants={boxAnimationRight}>
                                            <Box sx={{boxShadow: '0px 0px 5px 4px rgba(34, 60, 80, 0.2)', backgroundColor: '#fff'}} p={3}>
                                                <Typography variant='h4' gutterBottom>Коротко про мене</Typography>
                                                <div className={`${style.titleText} ${style.infoText}`}>
                                                    <p>
                                                        {infoText.p1}
                                                    </p>
                                                    <p>
                                                        {infoText.p2}
                                                    </p>
                                                    {auth && <Button onClick={() => dispatch(setStateModal({open: true, type: CHANGE_INFO, infoText}))}>Редагувати</Button>}
                                                </div>
                                            </Box>
                                        </motion.div>
                                    </Box>
                                </motion.div>
                            </Grid>
                        </Grid>
                    </Grid>
                </Box>
                <Box p={2}>
                    <Grid container justifyContent={'center'} gap={2}>
                        <NavLink to={'https://www.facebook.com/profile.php?id=100007231039289'} target='blank'>
                            <Grid item p={2} sx={{borderRadius: '8px', backgroundColor: '#1976d2', color: '#fff',transition: '0.5s', '&:hover': {backgroundColor: '#2b93fb'}}}>
                                    <FacebookIcon />
                                    <Typography variant='h6'>Ольга Шевейко</Typography>
                            </Grid>
                        </NavLink>
                        <Grid item p={2} sx={{borderRadius: '8px', backgroundColor: '#1976d2', color: '#fff'}}>
                            <AlternateEmailIcon />
                            <Typography variant='h6'>sevejko3@ukr.net</Typography>
                        </Grid>
                        <NavLink to={'http://osvita.ua/index.html/'} target='blank'>
                            <Grid item p={2} sx={{borderRadius: '8px', backgroundColor: '#1976d2', color: '#fff',transition: '0.5s', '&:hover': {backgroundColor: '#2b93fb'}}}>
                                    <SchoolIcon />
                                    <Typography variant='h6'>Освіта в Україні та за кордоном</Typography>
                            </Grid>
                        </NavLink>
                    </Grid>
                </Box>
            </Box>
            <div style={{padding: '6px', fontSize: '0.5rem', backgroundColor: '#1976d2', marginTop: '10px', color: 'white'}}>
                <address>powered by React, Material UI, Redux toolkit</address>
                <address>development 2103sheva@gmail.com</address>
            </div>
        </Box>
    );
}

export default Home;